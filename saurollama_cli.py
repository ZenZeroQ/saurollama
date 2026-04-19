import ollama, psutil, requests, feedparser, os, time, json
import sys
import datetime
import psutil # Esta librería será tu mejor amiga en la Etapa 2

from rich.console import Console
from rich.panel import Panel

console = Console()

# --- CAPA DE AUDITORÍA ---
def log_event(category, data):
    with open("saurollama_audit.log", "a", encoding="utf-8") as f:
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"[{timestamp}] [{category.upper()}]: {data}\n")

# --- CAPA DE HABILIDADES ---
def get_rss_news():
    url = "https://www.biobiochile.cl/lista/tag/tecnologia/feed"
    try:
        feed = feedparser.parse(url)
        if not feed.entries:
            return "No real-time news available."
        titles = [entry.title for entry in feed.entries[:3]]
        return " | ".join(titles)
    except:
        return "News service offline."

def get_weather(city="Santiago"):
    try:
        res = requests.get(f"https://wttr.in/{city}?format=%l:+%t+%C")
        return res.text
    except:
        return "Weather service offline."

# --- MOTOR DE PROCESAMIENTO ---
def process_command(user_input):
    # Detección de archivos
    if os.path.exists(user_input) and (user_input.endswith('.html') or user_input.endswith('.txt')):
        with open(user_input, 'r') as f:
            return f"FILE_CONTENT: {f.read()[:1000]}"

    # Clasificación de intención
    decision = ollama.chat(model='gemma:2b', messages=[
        {'role': 'user', 'content': f"Respond ONLY: NEWS, WEATHER, or NONE. Input: {user_input}"}
    ])
    intent = decision['message']['content'].strip().upper()
    log_event("INTENT", intent)

    if "NEWS" in intent: return f"LATEST NEWS: {get_rss_news()}"
    if "WEATHER" in intent: return f"WEATHER REPORT: {get_weather()}"
    return "No specific context found."

def print_verbose(title, data):
    console.print(f"\n[bold magenta]>>> [CANAL: {title}][/bold magenta]")
    # Verificamos si es un objeto de Ollama para convertirlo a dict
    if hasattr(data, 'model_dump'):
        data = data.model_dump()
    elif not isinstance(data, dict):
        data = {"raw_data": str(data)}
        
    formatted_json = json.dumps(data, indent=2, ensure_ascii=False)
    console.print(Panel(formatted_json, border_style="magenta", subtitle="RAW_DATA"))

def log_system_status(log_path, message):
    # Obtener uso de recursos actual desde Python
    cpu_usage = psutil.cpu_percent()
    ram_usage = psutil.virtual_memory().percent
    
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    with open(log_path, "a") as f:
        f.write(f"[{timestamp}] [PYTHON] {message}\n")
        f.write(f"[{timestamp}] [METRIC] CPU: {cpu_usage}% | RAM: {ram_usage}%\n")


def mostrar_telemetria():
    cpu = psutil.cpu_percent(interval=1)
    ram = psutil.virtual_memory()
    # Si tienes GPU NVIDIA, podrías sumar métricas de VRAM aquí
    
    status_msg = f"""
    📊 --- ESTADO DEL DELLSAURIO ---
    💻 CPU: {cpu}%
    🧠 RAM: {ram.percent}% (Usado: {ram.used // 10**6} MB / Total: {ram.total // 10**6} MB)
    --------------------------------
    """
    print(status_msg)
    return status_msg # También lo devolvemos para el log

# --- BUCLE PRINCIPAL ---
console.print(Panel("[bold green]SAUROLLAMA CLI v2.0[/bold green] - Audit Mode: ON"))

# Al iniciar el script:
if "--log-file" in sys.argv:
    log_path = sys.argv[sys.argv.index("--log-file") + 1]
    log_system_status(log_path, "Control del log asumido por SaurOllama Core.")


while True:

# Dentro de tu bucle de chat:
    user_input = input("🦖 Usuario: ")

# Mini-Dynatrace integrado
    if user_input.lower() == "/status":
        info = mostrar_telemetria() # La función que creamos
        log_system_status(log_path, f"Consulta manual de estatus: {info}")
        continue  # <--- Ahora sí está dentro del bucle

    status = f"CPU: {psutil.cpu_percent()}% | RAM: {psutil.virtual_memory().percent}%"
    user_msg = console.input(f"\n[dim]{status}[/dim] [bold green]>>> [/bold green]")





    if user_msg.lower() in ['exit', 'quit']: break

    with console.status("[yellow]Procesando flujo..."):
        # 1. Obtener contexto
        context = process_command(user_msg)
        
        # 2. Preparar Payload y mostrar salida
        payload = {
            "model": "gemma:2b",
            "messages": [
                {"role": "user", "content": f"Context: {context}. User: {user_msg}. Answer as Cyberpunk AI."}
            ]
        }
        print_verbose("SALIDA HACIA OLLAMA", payload)
        
        # 3. LLAMADA CRUCIAL (Aquí se define 'response')
        response = ollama.chat(model=payload["model"], messages=payload["messages"])
        
        # 4. Mostrar entrada (ya con el objeto definido)
        print_verbose("ENTRADA DESDE OLLAMA", response)
        
        res_text = response['message']['content']
    
    console.print(Panel(res_text, title="[green]SaurOllama[/green]", border_style="green"))
    log_event("AI_RESPONSE", res_text)