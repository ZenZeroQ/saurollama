import sys
import datetime
import psutil
import logging
import os

# Configuración de Capa de Eventos (App)
logging.basicConfig(
    filename='logs/events.log',
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s'
)

def log_system_status(log_path, message):
    cpu = psutil.cpu_percent()
    ram = psutil.virtual_memory().percent
    with open(log_path, "a") as f:
        f.write(f"[{datetime.datetime.now()}] [PYTHON] {message} | CPU: {cpu}% | RAM: {ram}%\n")

def log_chat(user_msg, bot_msg):
    with open("logs/chat_history.log", "a") as f:
        ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"[{ts}] USUARIO: {user_msg}\n[{ts}] SAUR: {bot_msg}\n{'-'*30}\n")

# --- INICIO DEL PROGRAMA ---
log_path = "./logs/saurollama_audit.log"
logging.info("SaurOllama CLI iniciado correctamente.")

print("🦖 ¡Bienvenido al Centro de Mando del DellSaurio!")
print("Escribe /status para telemetría o 'salir' para terminar.")

while True:
    user_input = input("\n🦖 Usuario: ")

    # Comandos especiales
    if user_input.lower() == "/status":
        cpu = psutil.cpu_percent(interval=1)
        ram = psutil.virtual_memory().percent
        status_info = f"CPU: {cpu}% | RAM: {ram}%"
        print(f"\n📊 [STATUS] {status_info}")
        log_system_status(log_path, f"Check manual de status: {status_info}")
        continue

    if user_input.lower() in ["salir", "exit", "quit"]:
        logging.info("Sesión finalizada por el usuario.")
        break

    # Interacción con la IA (Lógica simplificada)
    print("🤖 SaurOllama pensando...")
    try:
        # Aquí iría tu llamada a Ollama (ej. requests.post...)
        respuesta = "Esta es una respuesta simulada del motor." 
        
        print(f"🤖 SaurOllama: {respuesta}")
        log_chat(user_input, respuesta)
    except Exception as e:
        logging.error(f"Error en la comunicación: {e}")
        print("⚠️ Hubo un error al hablar con el motor.")