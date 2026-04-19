import ollama
import os
import sys

# HERRAMIENTAS DEL AGENTE
def obtener_uso_cpu():
    print("\n>>> [Agente consultando hardware]...")
    stream = os.popen("top -bn1 | grep 'Cpu(s)'")
    return stream.read()

def analizar_archivo(ruta):
    print(f"\n>>> [Agente leyendo archivo: {ruta}]...")
    if os.path.exists(ruta):
        with open(ruta, "r") as f:
            return f.read()
    return f"Error: El archivo '{ruta}' no existe."

# CONFIGURACIÓN DEL CEREBRO
prompt_sistema = (
    "Eres un asistente técnico en un Dell Latitude. Tienes estas reglas:\n"
    "1. Si el usuario pide ver la CPU o el sistema, responde SOLO: CONSULTAR_CPU\n"
    "2. Si el usuario pide analizar un archivo, responde SOLO: ANALIZAR:[nombre_archivo]\n"
    "3. Si el usuario dice 'salir' o 'adiós', responde SOLO: TERMINAR\n"
    "De lo contrario, responde amigablemente."
)

print("\033[1;34m--- Agente DellSaurio Activo (Escribe 'salir' para terminar) ---\033[0m")

while True:
    usuario_input = input("\n\033[1;32m[USUARIO] > \033[0m")
    
    # PRIMERA LLAMADA: Decisión (Esta es rápida)
    response = ollama.chat(model='gemma:2b', messages=[
        {'role': 'system', 'content': prompt_sistema},
        {'role': 'user', 'content': usuario_input},
    ])

    decision = response['message']['content'].strip()

    print(f"\033[1;30mDEBUG: El modelo respondió: '{decision}'\033[0m") 

    if "TERMINAR" in decision:
        print("Apagando agente... ¡Hasta luego!")
        break

    # LÓGICA DE HERRAMIENTAS
    prompt_final = ""
    if "CONSULTAR_CPU" in decision:
        datos = obtener_uso_cpu()
        prompt_final = f"Datos de CPU: {datos}. Explícalos brevemente."
    elif "ANALIZAR:" in decision:
        ruta = decision.split(":")[1].strip().replace("[", "").replace("]", "")
        contenido = analizar_archivo(ruta)
        prompt_final = f"Contenido del archivo {ruta}: {contenido}. Haz un resumen técnico."
    else:
        prompt_final = usuario_input

    # SEGUNDA LLAMADA: Respuesta con STREAMING (Aquí ves las palabras fluir)
    print("\033[1;33m[AGENTE] > \033[0m", end="")
    stream = ollama.chat(
        model='gemma:2b',
        messages=[{'role': 'user', 'content': prompt_final}],
        stream=True,
    )

    for chunk in stream:
        print(chunk['message']['content'], end='', flush=True)
    print() # Salto de línea al terminar