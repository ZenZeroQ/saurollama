#!/bin/bash

# Configuración de rutas
LOG_HARDWARE="./logs/saurollama_audit.log"
LOG_SYSTEM="./logs/console_output.log"
mkdir -p logs

echo "--- SESIÓN INICIADA: $(date) ---" >> $LOG_HARDWARE

# 1. Función de Limpieza (Protocolo de salida)
function cleanup {
    echo -e "\n🦖 Apagando motores del DellSaurio..."
    kill $APP_PID 2>/dev/null
    # Opcional: killall ollama si quieres cerrar el motor también
    echo "✅ Procesos finalizados. ¡Hasta la próxima!"
}
trap cleanup EXIT

# 2. Telemetría inicial (BASH)
MEM_FREE=$(free -h | grep Mem | awk '{print $4}')
CPU_LOAD=$(uptime | awk '{print $10}' | sed 's/,//')
echo "[BASH] RAM: $MEM_FREE | CPU Load: $CPU_LOAD" >> $LOG_HARDWARE

# 3. Lanzar Ollama con espera inteligente
if ! pgrep -x "ollama" > /dev/null; then
    echo "⚠️ Despertando a Ollama..."
    ollama serve >> $LOG_SYSTEM 2>&1 &
    until curl -s http://localhost:11434 > /dev/null; do
        printf "."
        sleep 1
    done
    echo " ✅ Motor listo."
fi

# 4. Lanzar Web (Flask) en segundo plano redirigiendo logs
echo "🚀 Lanzando Interfaz Web..."
python3 app.py >> $LOG_SYSTEM 2>&1 &
APP_PID=$!

# 5. Lanzar CLI (Control Principal)
echo "💻 Entrando al Centro de Mando..."
python3 saurollama_cli.py --log-file $LOG_HARDWARE