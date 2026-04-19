# -*- coding: utf-8 -*-
"""
SaurOllama Brain - Nucleo centralizado de comunicacion con Ollama y logging

Este modulo es responsable de:
- Manejar la comunicacion con el modelo Ollama (sin errores de JSON)
- Gestionar el logging centralizado de la aplicacion
- Proporcionar funciones de monitoreo del sistema
- Controlar el streaming de respuestas correctamente

Autor: DellSaurio Labs
Version: 1.0.0
"""

import os
import sys
import json
import logging
import datetime
import psutil
from typing import Optional, Generator, Dict, Any, List

# Importar cliente Ollama
try:
    import ollama
    OLLAMA_DISPONIBLE = True
except ImportError:
    OLLAMA_DISPONIBLE = False
    print("[BRAIN] Advertencia: Ollama no esta instalado. Usando modo simulacion.")


# =============================================================================
# CONFIGURACION DE LOGGING
# =============================================================================

class LogManager:
    """Gestor centralizado de logs para SaurOllama."""

    def __init__(self, log_dir: str = "./logs"):
        self.log_dir = log_dir
        self.audit_log = os.path.join(log_dir, "saurollama_audit.log")
        self.events_log = os.path.join(log_dir, "events.log")
        self.chat_log = os.path.join(log_dir, "chat_history.log")
        self.errors_log = os.path.join(log_dir, "errors.log")

        # Crear directorio de logs si no existe
        os.makedirs(log_dir, exist_ok=True)

        # Configurar logging principal
        self._configurar_logging()

    def _configurar_logging(self):
        """Configura los manejadores de logging."""
        # Logging principal con formato detallado
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s | %(levelname)s | %(message)s',
            handlers=[
                logging.FileHandler(self.events_log, encoding='utf-8'),
                logging.StreamHandler(sys.stdout)
            ]
        )

        # Logger especifico para audit
        self.audit_logger = logging.getLogger('audit')
        self.audit_logger.setLevel(logging.INFO)
        audit_handler = logging.FileHandler(self.audit_log, encoding='utf-8')
        audit_handler.setFormatter(
            logging.Formatter('%(asctime)s | %(levelname)s | %(message)s')
        )
        self.audit_logger.addHandler(audit_handler)

        # Logger para errores
        self.error_logger = logging.getLogger('errors')
        self.error_logger.setLevel(logging.ERROR)
        error_handler = logging.FileHandler(self.errors_log, encoding='utf-8')
        error_handler.setFormatter(
            logging.Formatter('%(asctime)s | %(levelname)s | %(funcName)s | %(message)s')
        )
        self.error_logger.addHandler(error_handler)

    def log_audit(self, mensaje: str, nivel: str = "INFO"):
        """Registra un mensaje en el log de auditoria."""
        getattr(self.audit_logger, nivel.lower(), self.audit_logger.info)(mensaje)

    def log_evento(self, mensaje: str):
        """Registra un evento general."""
        logging.info(mensaje)

    def log_error(self, mensaje: str, excepcion: Optional[Exception] = None):
        """Registra un error con informacion adicional."""
        if excepcion:
            self.error_logger.error(f"{mensaje}: {str(excepcion)}")
        else:
            self.error_logger.error(mensaje)

    def log_chat(self, usuario: str, saur: str):
        """Registra una conversacion en el historial."""
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        separador = "-" * 40

        with open(self.chat_log, "a", encoding="utf-8") as f:
            f.write(f"[{timestamp}] USUARIO: {usuario}\n")
            f.write(f"[{timestamp}] SAUR: {saur}\n")
            f.write(f"{separador}\n")


# Instancia global del gestor de logs
log_manager = LogManager()


# =============================================================================
# COMUNICACION CON OLLAMA - CORREGIDA PARA STREAMING
# =============================================================================

class OllamaBrain:
    """Cliente centralizado para comunicacion con Ollama.

    Esta clase maneja correctamente el streaming de respuestas
    evitando el error JSONDecodeError que ocurre cuando se intenta
    parsear multiples lineas JSON como un solo objeto.
    """

    def __init__(self, modelo: str = "gemma:2b", temperatura: float = 0.7):
        self.modelo = modelo
        self.temperatura = temperatura
        self.disponible = OLLAMA_DISPONIBLE

        if self.disponible:
            log_manager.log_audit(f"OllamaBrain inicializado con modelo: {modelo}")
        else:
            log_manager.log_audit("OllamaBrain iniciado en MODO SIMULACION", "WARNING")

    def verificar_servicio(self) -> bool:
        """Verifica si el servicio de Ollama esta disponible."""
        if not self.disponible:
            return False

        try:
            # Intentar una peticion simple para verificar conectividad
            modelos = ollama.list()
            log_manager.log_audit("Ollama servicio: OPERATIVO")
            return True
        except Exception as e:
            log_manager.log_error("Ollama servicio: NO DISPONIBLE", e)
            return False

    def chat(self, mensaje: str, stream: bool = False) -> str:
        """Envia un mensaje al modelo y devuelve la respuesta.

        Args:
            mensaje: El mensaje del usuario
            stream: Si True, devuelve un generador para streaming

        Returns:
            Respuesta del modelo como string, o generador si stream=True
        """
        if not self.disponible:
            return self._respuesta_simulada(mensaje)

        try:
            respuesta = ollama.chat(
                model=self.modelo,
                messages=[
                    {'role': 'user', 'content': mensaje}
                ],
                options={
                    'temperature': self.temperatura
                },
                stream=False  # IMPORTANTE: No usar streaming aqui para evitar JSONDecodeError
            )

            contenido = respuesta['message']['content']
            log_manager.log_audit(f"Chat completado: {len(contenido)} caracteres")
            return contenido

        except Exception as e:
            log_manager.log_error("Error en comunicacion con Ollama", e)
            return f"[ERROR] No pude comunicarme con el motor de IA: {str(e)}"

    def chat_streaming(self, mensaje: str) -> Generator[str, None, None]:
        """Genera respuestas en streaming (para CLI interactivo).

        IMPORTANTE: Esta funcion Yielda cada fragmento de la respuesta
        para que el CLI pueda mostrar el texto progresivamente.

        Args:
            mensaje: El mensaje del usuario

        Yields:
            Fragmentos de texto de la respuesta
        """
        if not self.disponible:
            yield from self._respuesta_simulada_stream(mensaje)
            return

        try:
            stream = ollama.chat(
                model=self.modelo,
                messages=[
                    {'role': 'user', 'content': mensaje}
                ],
                options={
                    'temperature': self.temperatura
                },
                stream=True  # Streaming habilitado para ver texto progresivamente
            )

            # Procesar cada linea JSON individualmente (NO todo junto)
            # Esto evita el error: JSONDecodeError - Extra data: line 2 column 1
            for fragmento in stream:
                if 'message' in fragmento and 'content' in fragmento['message']:
                    yield fragmento['message']['content']

            log_manager.log_audit("Streaming completado exitosamente")

        except Exception as e:
            log_manager.log_error("Error en streaming con Ollama", e)
            yield f"[ERROR] Problema en el streaming: {str(e)}"

    def clasificar_intencion(self, mensaje: str) -> str:
        """Clasifica la intencion del mensaje del usuario.

        Returns:
            Una de: STATUS, WEATHER, NEWS, ANALYZE, TERMINAR, NONE
        """
        if not self.disponible:
            return self._clasificar_simple(mensaje)

        prompt = (
            "Clasifica la intencion del siguiente mensaje en UNA sola palabra: "
            "STATUS (si pide info del sistema), WEATHER (clima), NEWS (noticias), "
            "ANALYZE (analisis de archivos), TERMINAR (salir), NONE (otro). "
            f"Mensaje: {mensaje}"
        )

        try:
            respuesta = ollama.chat(
                model=self.modelo,
                messages=[{'role': 'user', 'content': prompt}],
                options={'temperature': 0.1}  # Baja temperatura para clasificacion
            )
            intencion = respuesta['message']['content'].strip().upper()

            # Extraer solo la palabra clave
            for palabra in ['STATUS', 'WEATHER', 'NEWS', 'ANALYZE', 'TERMINAR', 'NONE']:
                if palabra in intencion:
                    return palabra

            return 'NONE'

        except Exception as e:
            log_manager.log_error("Error en clasificacion de intencion", e)
            return 'NONE'

    def _respuesta_simulada(self, mensaje: str) -> str:
        """Respuesta cuando Ollama no esta disponible."""
        log_manager.log_audit("Generando respuesta simulada", "WARNING")
        return (
            "[MODO SIMULACION] Hola, soy SaurOllama en modo de prueba. "
            "Para funcionamiento real, asegúrate de que Ollama esté ejecutándose "
            "con: ollama serve"
        )

    def _respuesta_simulada_stream(self, mensaje: str) -> Generator[str, None, None]:
        """Respuesta simulada en streaming."""
        texto = self._respuesta_simulada(mensaje)
        for palabra in texto.split():
            yield palabra + " "
        return

    def _clasificar_simple(self, mensaje: str) -> str:
        """Clasificacion simple basada en palabras clave."""
        mensaje_lower = mensaje.lower()

        if any(p in mensaje_lower for p in ['status', 'cpu', 'ram', 'memoria', 'sistema']):
            return 'STATUS'
        if any(p in mensaje_lower for p in ['clima', 'weather', 'temperatura']):
            return 'WEATHER'
        if any(p in mensaje_lower for p in ['news', 'noticias', 'nuevo']):
            return 'NEWS'
        if any(p in mensaje_lower for p in ['analizar', 'analiza', 'archivo']):
            return 'ANALYZE'
        if any(p in mensaje_lower for p in ['salir', 'exit', 'terminar', 'adiós']):
            return 'TERMINAR'

        return 'NONE'


# Instancia global del cerebro
brain = OllamaBrain()


# =============================================================================
# FUNCIONES DE MONITOREO DEL SISTEMA
# =============================================================================

def obtener_status_sistema() -> Dict[str, Any]:
    """Obtiene el estado actual del sistema.

    Returns:
        Diccionario con informacion de CPU, RAM y procesos
    """
    try:
        cpu_percent = psutil.cpu_percent(interval=1)
        cpu_count = psutil.cpu_count()
        ram = psutil.virtual_memory()

        return {
            'cpu': {
                'uso_porcentaje': cpu_percent,
                'nucleos': cpu_count
            },
            'ram': {
                'total_mb': round(ram.total / (1024 * 1024), 1),
                'usada_mb': round(ram.used / (1024 * 1024), 1),
                'disponible_mb': round(ram.available / (1024 * 1024), 1),
                'uso_porcentaje': ram.percent
            },
            'timestamp': datetime.datetime.now().isoformat()
        }

    except Exception as e:
        log_manager.log_error("Error al obtener status del sistema", e)
        return {'error': str(e)}


def formatear_status_sistema() -> str:
    """Formatea el status del sistema para mostrar al usuario.

    Returns:
        String formateado con la informacion del sistema
    """
    status = obtener_status_sistema()

    if 'error' in status:
        return f"[ERROR] No se pudo obtener el status: {status['error']}"

    return (
        f"CPU: {status['cpu']['uso_porcentaje']}% ({status['cpu']['nucleos']} nucleos) | "
        f"RAM: {status['ram']['uso_porcentaje']}% "
        f"({status['ram']['usada_mb']}MB / {status['ram']['total_mb']}MB)"
    )


# =============================================================================
# FUNCIONES AUXILIARES
# =============================================================================

def obtener_telemetria_bash() -> str:
    """Obtiene telemetría usando comandos de bash.

    Returns:
        String con informacion de memoria y carga CPU
    """
    try:
        import subprocess

        # Memoria
        resultado = subprocess.run(
            ['free', '-h'],
            capture_output=True,
            text=True
        )
        lineas = resultado.stdout.strip().split('\n')
        if len(lineas) >= 2:
            mem_info = lineas[1].split()
            memoria = f"RAM: {mem_info[3] if len(mem_info) > 3 else 'N/A'}"

        # Carga CPU
        resultado = subprocess.run(
            ['uptime'],
            capture_output=True,
            text=True
        )
        carga = resultado.stdout.strip().split('load average:')[-1].strip() if 'load average:' in resultado.stdout else 'N/A'

        return f"{memoria} | CPU Load: {carga}"

    except Exception as e:
        log_manager.log_error("Error al obtener telemetria bash", e)
        return f"[ERROR] {str(e)}"


# =============================================================================
# PRUEBA DE MODULO
# =============================================================================

if __name__ == "__main__":
    print("=" * 50)
    print("SaurOllama Brain - Modulo de Prueba")
    print("=" * 50)

    # Verificar servicio Ollama
    print("\n[1] Verificando servicio Ollama...")
    if brain.verificar_servicio():
        print("    Ollama: OPERATIVO")
    else:
        print("    Ollama: NO DISPONIBLE (usando modo simulacion)")

    # Obtener status del sistema
    print("\n[2] Status del Sistema:")
    print(f"    {formatear_status_sistema()}")

    # Prueba de chat
    print("\n[3] Prueba de Chat:")
    respuesta = brain.chat("Di 'Hola' en una palabra")
    print(f"    Saur: {respuesta[:100]}..." if len(respuesta) > 100 else f"    Saur: {respuesta}")

    print("\n" + "=" * 50)
    print("Prueba completada")
    print("=" * 50)
