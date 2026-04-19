#!/bin/bash

LOG_FILE="./logs/saurollama_audit.log"
# Crear carpeta de logs si no existe
mkdir -p logs

echo "--- INICIO DE SESIÓN: $(date) ---" >> $LOG_FILE
echo "[BASH] Midiendo estado inicial del DellSaurio..." >> $LOG_FILE


# Capturar RAM y CPU (simplificado para el log)
MEM_FREE=$(free -h | grep Mem | awk '{print $4}')
CPU_LOAD=$(uptime | awk '{print $10}' | sed 's/,//')

echo "[BASH] RAM Disponible: $MEM_FREE | Carga CPU: $CPU_LOAD" >> $LOG_FILE
echo "[BASH] Lanzando SaurOllama..." >> $LOG_FILE

echo "🦖 Iniciando Motores de SaurOllama..."


# 1. Verificar e iniciar Ollama
if ! pgrep -x "ollama" > /dev/null
then
    echo "⚠️ Ollama no está activo. Iniciando servicio..."
    ollama serve > /dev/null 2>&1 &
    
    # Bucle de espera inteligente (Sustituye al sleep 5)
    echo -n "⏳ Esperando a que el motor caliente"
    until curl -s http://localhost:11434 > /dev/null; do
        printf '.'
        sleep 1
    done
    echo " ✅ ¡Motor listo!"
fi

# 2. Iniciar el servidor de Flask (tu backend)
#echo "🚀 Lanzando Interfaz Web..."
#python3 app.py &
echo "🚀 Lanzando Interfaz Web en segundo plano..."
python3 app.py > /dev/null 2>&1 &

# Guardamos el ID del proceso por si queremos matarlo después
APP_PID=$!
echo "Servidor web corriendo con PID: $APP_PID"

# 3. Lanzar el CLI en modo interactivo
#echo "💻 Entrando al Centro de Mando..."

# PASO DE MANDO: Ejecutamos Python pasando la ruta del log
#python3 saurollama_cli.py --verbose --log-file $LOG_FILE
#python3 saurollama_cli.py --verbose

echo "💻 Entrando al Centro de Mando (CLI)..."
python3 saurollama_cli.py --verbose --log-file $LOG_FILE


# Al salir del CLI, matamos el proceso de la app web
kill $APP_PID
echo "🦖 Motores apagados. ¡Hasta la próxima!"