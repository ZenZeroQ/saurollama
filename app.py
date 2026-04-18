from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
import ollama
import requests
import os
import psutil

app = Flask(__name__)

# -- FUNCIONES LEER HTML

def read_local_html(filename):
    try:
        # Buscamos el archivo en tu directorio de proyectos
        with open(filename, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
            # Extraemos solo el texto, eliminando scripts y estilos
            for script in soup(["script", "style"]):
                script.extract()
            return soup.get_text(separator=' ', strip=True)[:2000] # Limitamos para no saturar a Ollama
    except Exception as e:
        return f"Error reading file: {e}"


# --- FUNCIONES DE APOYO (SKILLS) ---

def get_weather(city="Santiago"):
    try:
        res = requests.get(f"https://wttr.in/{city}?format=3")
        return res.text
    except:
        return "Weather service offline."

def get_news():
    return "Global News: Local AI agents are now capable of system monitoring."

def save_report(content):
    try:
        with open("last_news_report.txt", "w") as f:
            f.write(content)
        return "File saved."
    except:
        return "Save failed."

def get_system_status():
    cpu = psutil.cpu_percent(interval=1)
    ram = psutil.virtual_memory().percent
    return f"CPU: {cpu}% | RAM: {ram}%"

# --- RUTAS ---

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message", "").lower()
    
    # 1. CLASIFICACIÓN DE INTENCIÓN
   
   # decision_prompt = (
    #    "Identify intent: WEATHER, NEWS, STATUS, or NONE. "
    #    "User: " + user_input
    #)
    decision_prompt = "Identify intent: WEATHER, NEWS, STATUS, ANALYZE, or NONE. User: " + user_input
    try:
        res_decision = ollama.chat(model='gemma:2b', messages=[
            {'role': 'user', 'content': decision_prompt}
        ])
        debug_val = res_decision['message']['content'].strip().upper()
    except:
        debug_val = "NONE"

    print(f"\033[1;33m[DEBUG]: Intent -> {debug_val}\033[0m")

    context_data = ""
    
    # 2. LÓGICA DE RESPUESTA
    # 2. LÓGICA DE RESPUESTA (La Cascada)
    if "STATUS" in debug_val:
        context_data = get_system_status()
        print(f"\033[1;32m[CAPA SISTEMA]: {context_data}\033[0m")
        
    elif "WEATHER" in debug_val:
        context_data = get_weather()
        print(f"\033[1;36m[CAPA API]: Clima recibido\033[0m")
        
    elif "NEWS" in debug_val:
        context_data = get_news()
        print(f"\033[1;35m[CAPA API]: Noticias recibidas\033[0m")
        
    elif "ANALYZE" in debug_val: # <--- AGREGAMOS ESTA NUEVA CAPA
        # Buscamos archivos .html en tu directorio actual
        html_files = [f for f in os.listdir('.') if f.endswith('.html')]
        if html_files:
            # Usamos la función que lee y limpia el HTML
            context_data = f"Content of {html_files[0]}: " + read_local_html(html_files[0])
            print(f"\033[1;34m[CAPA ANALISTA]: Analizando {html_files[0]}\033[0m")
        else:
            context_data = "No local HTML files found to analyze."
            print("\033[1;31m[SISTEMA]: Error - No hay archivos HTML\033[0m")

    # 3. GENERACIÓN FINAL
    final_prompt = f"Context: {context_data}. User: {user_input}. Respond as Cyberpunk AI."
    res_final = ollama.chat(model='gemma:2b', messages=[
        {'role': 'user', 'content': final_prompt}
    ])

    # Guardado automático si son noticias
    if "NEWS" in debug_val:
        save_report(res_final['message']['content'])

    return jsonify({
        "response": res_final['message']['content'],
        "debug": debug_val,
        "sys_status": get_system_status() # Enviamos el estado a la web
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)