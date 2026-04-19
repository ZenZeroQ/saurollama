# -*- coding: utf-8 -*-
"""
SaurOllama Web - Servidor Flask con Interfaz Web

Este modulo proporciona la interfaz web para SaurOllama.
Utiliza brain.py para la comunicacion con Ollama y logging centralizado.

Ejecucion:
    python3 app.py

El servidor estara disponible en:
    - http://localhost:5000 (local)
    - http://0.0.0.0:5000 (accesible desde la red)

Autor: DellSaurio Labs
Version: 1.0.0
"""

import os
from flask import Flask, render_template, request, jsonify
from datetime import datetime

# Importar el modulo centralizado
from brain import (
    brain,
    log_manager,
    obtener_status_sistema,
    formatear_status_sistema
)


# =============================================================================
# CONFIGURACION DE FLASK
# =============================================================================

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'saurollama-secret-key-2024')

# Configuracion de logging para Flask
logging.basicConfig(
    level=10,  # DEBUG
    format='%(asctime)s | %(levelname)s | %(message)s'
)


# =============================================================================
# FUNCIONES AUXILIARES
# =============================================================================

def timestamp_actual():
    """Devuelve el timestamp actual formateado."""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


# =============================================================================
# RUTAS PRINCIPALES
# =============================================================================

@app.route('/')
def home():
    """Pagina principal - Interface Web de SaurOllama."""
    log_manager.log_audit("Acceso a pagina principal")
    return render_template('index.html')


@app.route('/status')
def status():
    """Endpoint para obtener el estado del sistema."""
    try:
        estado = obtener_status_sistema()
        return jsonify({
            'success': True,
            'data': estado,
            'timestamp': timestamp_actual()
        })
    except Exception as e:
        log_manager.log_error("Error al obtener status", e)
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/chat', methods=['POST'])
def api_chat():
    """Endpoint principal para chat con la IA.

    Recibe:
        {
            "message": "texto del usuario",
            "stream": false (opcional)
        }

    Devuelve:
        {
            "success": true,
            "response": "respuesta del modelo",
            "intent": "intencion detectada",
            "timestamp": "..."
        }
    """
    try:
        # Obtener datos del request
        data = request.get_json()
        mensaje = data.get('message', '').strip()
        usar_stream = data.get('stream', False)

        if not mensaje:
            return jsonify({
                'success': False,
                'error': 'Mensaje vacio'
            }), 400

        # Log del mensaje recibido
        print(f"[API] Mensaje recibido: {mensaje}")
        log_manager.log_audit(f"API Chat - Mensaje: {mensaje[:50]}...")

        # Clasificar intencion
        intencion = brain.clasificar_intencion(mensaje)
        print(f"[API] Intencion: {intencion}")

        # Procesar segun intencion
        respuesta = ""

        if intencion == 'STATUS':
            respuesta = formatear_status_sistema()
            log_manager.log_audit(f"Respuesta STATUS: {respuesta}")

        elif intencion == 'TERMINAR':
            respuesta = "Sesion terminada. Si necesitas algo mas, aqui estare."
            log_manager.log_chat(mensaje, respuesta)

        else:
            # Usar Ollama para generar respuesta
            respuesta = brain.chat(mensaje)
            log_manager.log_chat(mensaje, respuesta)

        return jsonify({
            'success': True,
            'response': respuesta,
            'intent': intencion,
            'timestamp': timestamp_actual()
        })

    except Exception as e:
        log_manager.log_error("Error en API chat", e)
        return jsonify({
            'success': False,
            'error': f'Error interno del servidor: {str(e)}'
        }), 500


@app.route('/api/health')
def health():
    """Endpoint de salud del servicio."""
    ollama_ok = brain.verificar_servicio()

    return jsonify({
        'status': 'ok' if ollama_ok else 'degraded',
        'ollama': 'online' if ollama_ok else 'offline',
        'modelo': brain.modelo,
        'timestamp': timestamp_actual()
    })


@app.route('/api/history')
def history():
    """Endpoint para obtener el historial de chat."""
    try:
        chat_log = os.path.join('./logs', 'chat_history.log')

        if os.path.exists(chat_log):
            with open(chat_log, 'r', encoding='utf-8') as f:
                lineas = f.readlines()
                # Devolver ultimas 50 lineas
                ultimas = lineas[-50:] if len(lineas) > 50 else lineas
                contenido = ''.join(ultimas)
        else:
            contenido = "No hay historial disponible."

        return jsonify({
            'success': True,
            'history': contenido,
            'timestamp': timestamp_actual()
        })

    except Exception as e:
        log_manager.log_error("Error al obtener historial", e)
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


# =============================================================================
# MANEJADORES DE ERRORES
# =============================================================================

@app.errorhandler(404)
def not_found(e):
    """Manejador para paginas no encontradas."""
    return jsonify({
        'success': False,
        'error': 'Pagina no encontrada'
    }), 404


@app.errorhandler(500)
def internal_error(e):
    """Manejador para errores internos."""
    log_manager.log_error("Error 500 en Flask", e)
    return jsonify({
        'success': False,
        'error': 'Error interno del servidor'
    }), 500


# =============================================================================
# INICIALIZACION
# =============================================================================

def iniciar_servidor(host='0.0.0.0', puerto=5000, debug=True):
    """Inicia el servidor Flask.

    Args:
        host: Host donde escuchara el servidor (0.0.0.0 para toda la red)
        puerto: Puerto de comunicacion
        debug: Modo debug (True para desarrollo)
    """
    print("=" * 60)
    print("SaurOllama Web Server")
    print("=" * 60)

    # Verificar Ollama
    if brain.verificar_servicio():
        print(f" Ollama: OPERATIVO ({brain.modelo})")
    else:
        print(" Ollama: NO DISPONIBLE (modo simulacion)")

    # Mostrar informacion del sistema
    print(f" Sistema: {formatear_status_sistema()}")
    print("=" * 60)

    # Log de inicio
    log_manager.log_audit(f"Servidor Flask iniciado en {host}:{puerto}")

    # Iniciar servidor
    app.run(host=host, port=puerto, debug=debug)


# =============================================================================
# PUNTO DE ENTRADA
# =============================================================================

if __name__ == '__main__':
    # Por defecto, escuchar en todas las interfaces
    iniciar_servidor(host='0.0.0.0', puerto=5000, debug=True)
