#!/bin/bash
# =============================================================================
# SaurOllama Startup Script - Script de Inicio del Sistema
# =============================================================================
# Este script levanta todos los servicios necesarios para SaurOllama:
#   1. Verifica que Ollama este ejecutandose
#   2. Inicia el servidor web Flask
#   3. Lanza la interfaz CLI (opcional)
#
# Uso:
#   ./start_saur.sh          # Modo normal
#   ./start_saur.sh --cli    # Incluir CLI
#   ./start_saur.sh --help   # Mostrar ayuda
#
# Autor: DellSaurio Labs
# Version: 1.0.0
# =============================================================================

# -----------------------------------------------------------------------------
# CONFIGURACION
# -----------------------------------------------------------------------------

# Rutas de logs
DIR_LOGS="./logs"
LOG_AUDITORIA="$DIR_LOGS/saurollama_audit.log"
LOG_SISTEMA="$DIR_LOGS/console_output.log"
LOG_EVENTOS="$DIR_LOGS/events.log"

# Archivos de PID
DIR_PIDS="$DIR_LOGS"
PID_FLASK="$DIR_PIDS/flask.pid"
PID_OLLAMA="$DIR_PIDS/ollama.pid"

# Configuracion de servicios
PUERTO_FLASK=5000
PUERTO_OLLAMA=11434
HOST="0.0.0.0"

# Colores para output (estilo Cyberpunk)
COLOR_RESET='\033[0m'
COLOR_VERDE='\033[92m'
COLOR_AZUL='\033[94m'
COLOR_AMARILLO='\033[93m'
COLOR_ROJO='\033[91m'
COLOR_CYAN='\033[96m'

# -----------------------------------------------------------------------------
# FUNCIONES DE UTILIDAD
# -----------------------------------------------------------------------------

# Crear directorios necesarios
crear_directorios() {
    mkdir -p "$DIR_LOGS"
    mkdir -p "$DIR_PIDS"
}

# Escribir en log de auditoria
log_audit() {
    local mensaje="$1"
    local nivel="${2:-INFO}"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$nivel] $mensaje" >> "$LOG_AUDITORIA"
}

# Mostrar mensaje formateado
mostrar_mensaje() {
    local color="$1"
    local mensaje="$2"
    echo -e "${color}${mensaje}${COLOR_RESET}"
}

# Mostrar banner de inicio
mostrar_banner() {
    clear
    echo -e "${COLOR_CYAN}"
    cat << 'EOF'

    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   🦕 SAUROLLAMA STARTUP - DellSaurio Control Center 🦕      ║
    ║                                                               ║
    ║   Iniciando servicios del sistema SaurOllama...              ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝

EOF
    echo -e "${COLOR_RESET}"
}

# -----------------------------------------------------------------------------
# FUNCIONES DE VERIFICACION
# -----------------------------------------------------------------------------

# Verificar si un comando esta disponible
comando_disponible() {
    command -v "$1" >/dev/null 2>&1
}

# Verificar si un puerto esta en uso
puerto_en_uso() {
    if comando_disponible "ss"; then
        ss -tuln | grep -q ":$1 "
    elif comando_disponible "netstat"; then
        netstat -tuln | grep -q ":$1 "
    else
        # Fallback: usar curl
        curl -s "http://localhost:$1" >/dev/null 2>&1
    fi
}

# -----------------------------------------------------------------------------
# FUNCIONES DE SERVICIOS
# -----------------------------------------------------------------------------

# Verificar/Iniciar Ollama
verificar_ollama() {
    mostrar_mensaje "$COLOR_AZUL" "[1/3] Verificando Ollama..."

    if pgrep -x "ollama" > /dev/null; then
        mostrar_mensaje "$COLOR_VERDE" "    Ollama ya esta en ejecucion."
        log_audit "Ollama: ya en ejecucion"
        return 0
    fi

    # Verificar si el servicio esta respondiendo
    if curl -s "http://localhost:$PUERTO_OLLAMA" > /dev/null 2>&1; then
        mostrar_mensaje "$COLOR_VERDE" "    Ollama respondiendo en puerto $PUERTO_OLLAMA."
        log_audit "Ollama: servicio detectedo en puerto $PUERTO_OLLAMA"
        return 0
    fi

    # Intentar iniciar Ollama
    mostrar_mensaje "$COLOR_AMARILLO" "    Ollama no detectedo. Intentando iniciar..."

    if comando_disponible "ollama"; then
        ollama serve >> "$LOG_SISTEMA" 2>&1 &
        PID=$!

        # Guardar PID
        echo $PID > "$PID_OLLAMA"

        # Esperar a que este listo (max 30 segundos)
        CONTADOR=0
        while [ $CONTADOR -lt 30 ]; do
            if curl -s "http://localhost:$PUERTO_OLLAMA" > /dev/null 2>&1; then
                mostrar_mensaje "$COLOR_VERDE" "    Ollama iniciado exitosamente (PID: $PID)"
                log_audit "Ollama: iniciado (PID=$PID)"
                return 0
            fi
            echo -n "."
            sleep 1
            CONTADOR=$((CONTADOR + 1))
        done

        mostrar_mensaje "$COLOR_ROJO" "    Error: Ollama no respondio a tiempo."
        log_audit "Ollama: FALLO al iniciar" "ERROR"
        return 1
    else
        mostrar_mensaje "$COLOR_ROJO" "    Error: Ollama no esta instalado."
        mostrar_mensaje "$COLOR_AMARILLO" "    Instala con: curl -fsSL https://ollama.com/install.sh | sh"
        log_audit "Ollama: NO INSTALADO" "ERROR"
        return 1
    fi
}

# Iniciar servidor Flask
iniciar_flask() {
    mostrar_mensaje "$COLOR_AZUL" "[2/3] Iniciando servidor web..."

    if puerto_en_uso "$PUERTO_FLASK"; then
        mostrar_mensaje "$COLOR_AMARILLO" "    Puerto $PUERTO_FLASK ya en uso."
        mostrar_mensaje "$COLOR_AMARILLO" "    Deteniendo proceso anterior..."
        # Intentar encontrar y matar el proceso de Flask
        pkill -f "python.*app.py" 2>/dev/null
        sleep 2
    fi

    # Verificar que app.py existe
    if [ ! -f "app.py" ]; then
        mostrar_mensaje "$COLOR_ROJO" "    Error: app.py no encontrado."
        log_audit "Flask: app.py no encontrado" "ERROR"
        return 1
    fi

    # Verificar dependencias
    if ! comando_disponible "python3"; then
        mostrar_mensaje "$COLOR_ROJO" "    Error: Python3 no esta instalado."
        return 1
    fi

    # Iniciar Flask en segundo plano
    python3 app.py >> "$LOG_SISTEMA" 2>&1 &
    PID=$!

    # Guardar PID
    echo $PID > "$PID_FLASK"

    # Esperar a que este listo
    sleep 3

    if puerto_en_uso "$PUERTO_FLASK"; then
        mostrar_mensaje "$COLOR_VERDE" "    Servidor Flask iniciado (PID: $PID)"
        mostrar_mensaje "$COLOR_VERDE" "    Accesible en: http://$HOST:$PUERTO_FLASK"
        log_audit "Flask: iniciado (PID=$PID, puerto=$PUERTO_FLASK)"
        return 0
    else
        mostrar_mensaje "$COLOR_ROJO" "    Error: Flask no respondio."
        log_audit "Flask: FALLO al iniciar" "ERROR"
        return 1
    fi
}

# Iniciar CLI (opcional)
iniciar_cli() {
    mostrar_mensaje "$COLOR_AZUL" "[3/3] Iniciando CLI..."

    if [ ! -f "saurollama_cli.py" ]; then
        mostrar_mensaje "$COLOR_ROJO" "    Error: saurollama_cli.py no encontrado."
        return 1
    fi

    mostrar_mensaje "$COLOR_VERDE" "    Abriendo CLI interactivo..."
    mostrar_mensaje "$COLOR_CYAN" "    (Cierra esta terminal o presiona Ctrl+C para salir)"

    # Ejecutar CLI en primer plano
    python3 saurollama_cli.py
}

# -----------------------------------------------------------------------------
# FUNCIONES DE LIMPIEZA
# -----------------------------------------------------------------------------

cleanup() {
    echo ""
    mostrar_mensaje "$COLOR_AMARILLO" "Deteniendo servicios..."
    log_audit "Shutdown: deteniendo servicios"

    # Detener Flask
    if [ -f "$PID_FLASK" ]; then
        PID=$(cat "$PID_FLASK")
        if kill -0 $PID 2>/dev/null; then
            kill $PID 2>/dev/null
            mostrar_mensaje "$COLOR_VERDE" "    Flask detenido"
        fi
        rm -f "$PID_FLASK"
    fi

    # Detener Ollama (opcional - descomenta si lo deseas)
    # if [ -f "$PID_OLLAMA" ]; then
    #     PID=$(cat "$PID_OLLAMA")
    #     if kill -0 $PID 2>/dev/null; then
    #         kill $PID 2>/dev/null
    #         mostrar_mensaje "$COLOR_VERDE" "    Ollama detenido"
    #     fi
    #     rm -f "$PID_OLLAMA"
    # fi

    mostrar_mensaje "$COLOR_CYAN" "Servicios detenidos. Hasta la proxima!"
    log_audit "Shutdown: completado"
    exit 0
}

# Registrar trap para limpieza
trap cleanup EXIT SIGINT SIGTERM

# -----------------------------------------------------------------------------
# TELEMETRIA INICIAL
# -----------------------------------------------------------------------------

obtener_telemetria() {
    # Memoria
    if comando_disponible "free"; then
        MEM_INFO=$(free -h | grep Mem | awk '{print $4}')
        MEM="RAM Disponible: $MEM_INFO"
    else
        MEM="RAM: N/A"
    fi

    # Carga CPU
    if comando_disponible "uptime"; then
        CPU_LOAD=$(uptime | awk '{print $10}' | sed 's/,//')
        CPU="Carga CPU: $CPU_LOAD"
    else
        CPU="CPU: N/A"
    fi

    echo "$MEM | $CPU"
}

# -----------------------------------------------------------------------------
# MOSTRAR AYUDA
# -----------------------------------------------------------------------------

mostrar_ayuda() {
    cat << 'EOF'

SaurOllama Startup Script
=========================

Uso:
    ./start_saur.sh [opciones]

Opciones:
    --help, -h      Mostrar esta ayuda
    --cli           Iniciar CLI interactivo despues de web
    --web-only      Solo iniciar servidor web (sin CLI)
    --status        Verificar estado de servicios

Ejemplos:
    ./start_saur.sh              # Iniciar web + CLI
    ./start_saur.sh --cli        # Modo completo con CLI
    ./start_saur.sh --web-only   # Solo servidor web
    ./start_saur.sh --status     # Ver estado

Logs:
    Los archivos de log se guardan en ./logs/
    - saurollama_audit.log   : Log principal de auditoria
    - console_output.log     : Output de consola
    - events.log            : Eventos del sistema

EOF
}

# -----------------------------------------------------------------------------
# VERIFICAR ESTADO
# -----------------------------------------------------------------------------

verificar_estado() {
    echo ""
    echo "Estado de Servicios SaurOllama"
    echo "=============================="
    echo ""

    # Ollama
    echo -n "Ollama: "
    if pgrep -x "ollama" > /dev/null; then
        echo -e "${COLOR_VERDE}EN EJECUCION${COLOR_RESET}"
    elif curl -s "http://localhost:$PUERTO_OLLAMA" > /dev/null 2>&1; then
        echo -e "${COLOR_VERDE}RESPONDIENDO${COLOR_RESET}"
    else
        echo -e "${COLOR_ROJO}DETENIDO${COLOR_RESET}"
    fi

    # Flask
    echo -n "Flask: "
    if puerto_en_uso "$PUERTO_FLASK"; then
        echo -e "${COLOR_VERDE}EN EJECUCION (puerto $PUERTO_FLASK)${COLOR_RESET}"
    else
        echo -e "${COLOR_ROJO}DETENIDO${COLOR_RESET}"
    fi

    # Python
    echo -n "Python3: "
    if comando_disponible "python3"; then
        echo -e "${COLOR_VERDE}$(python3 --version)${COLOR_RESET}"
    else
        echo -e "${COLOR_ROJO}NO INSTALADO${COLOR_RESET}"
    fi

    echo ""
    echo "Telemetria: $(obtener_telemetria)"
    echo ""
}

# -----------------------------------------------------------------------------
# PROGRAMA PRINCIPAL
# -----------------------------------------------------------------------------

main() {
    # Crear directorios
    crear_directorios

    # Registrar inicio
    echo ""
    log_audit "=========================================="
    log_audit "SESION INICIADA: $(date)"
    log_audit "Telemetria: $(obtener_telemetria)"
    log_audit "=========================================="

    # Mostrar banner
    mostrar_banner

    # Parsear argumentos
    MODO_CLI=false
    MODO_WEB_ONLY=false

    while [[ $# -gt 0 ]]; do
        case $1 in
            --help|-h)
                mostrar_ayuda
                exit 0
                ;;
            --cli)
                MODO_CLI=true
                shift
                ;;
            --web-only)
                MODO_WEB_ONLY=true
                shift
                ;;
            --status)
                verificar_estado
                exit 0
                ;;
            *)
                echo "Opcion desconocida: $1"
                echo "Usa --help para ver las opciones disponibles."
                exit 1
                ;;
        esac
    done

    # Iniciar servicios
    verificar_ollama
    iniciar_flask

    # Mostrar resumen
    echo ""
    echo "=============================="
    echo -e "${COLOR_VERDE}Servicios Iniciados${COLOR_RESET}"
    echo "=============================="
    echo "Web UI:   http://localhost:$PUERTO_FLASK"
    echo "API:      http://localhost:$PUERTO_FLASK/api/health"
    echo "Logs:     ./logs/"
    echo ""
    echo "Presiona Ctrl+C para detener los servicios."
    echo ""

    log_audit "Startup completado exitosamente"

    # Modo de ejecucion
    if [ "$MODO_CLI" = true ]; then
        # Modo completo: esperar un momento y abrir CLI
        sleep 2
        iniciar_cli
    else
        # Modo solo web: mantener el script en ejecucion
        echo -e "${COLOR_CYAN}Servidor en ejecucion...${COLOR_RESET}"
        echo -e "${COLOR_CYAN}Presiona Ctrl+C para detener.${COLOR_RESET}"
        wait
    fi
}

# Ejecutar
main "$@"
