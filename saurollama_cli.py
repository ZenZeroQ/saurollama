# -*- coding: utf-8 -*-
"""
SaurOllama CLI - Interfaz de Linea de Comandos

Este modulo proporciona la interfaz de terminal estilo Cyberpunk
para interactuar con SaurOllama. Utiliza brain.py para toda la
comunicacion con Ollama y logging centralizado.

Uso:
    python3 saurollama_cli.py
    python3 saurollama_cli.py --log-file ./logs/auditoria.log

Autor: DellSaurio Labs
Version: 1.0.0
"""

import sys
import os
import argparse
import datetime

# Importar el modulo centralizado
from brain import (
    brain,
    log_manager,
    obtener_status_sistema,
    formatear_status_sistema,
    obtener_telemetria_bash
)


# =============================================================================
# CONFIGURACION DE LA APLICACION
# =============================================================================

NOMBRE_APP = "SaurOllama"
VERSION = "1.0.0"
MODELOS_DISPONIBLES = ["gemma:2b", "llama2", "mistral"]


# =============================================================================
# INTERFAZ DE USUARIO ESTILO CYBERPUNK
# =============================================================================

class InterfazCyberpunk:
    """Interfaz de usuario con estilo visual Cyberpunk."""

    COLORES = {
        'reset': '\033[0m',
        'negrita': '\033[1m',
        'verde': '\033[92m',
        'azul': '\033[94m',
        'amarillo': '\033[93m',
        'rojo': '\033[91m',
        'magenta': '\033[95m',
        'cyan': '\033[96m',
        'gris': '\033[90m'
    }

    @classmethod
    def dinosaurio(cls, mensaje: str, color: str = 'verde') -> str:
        """Muestra el mensaje del dinosaurio (Saur)."""
        color_code = cls.COLORES.get(color, cls.COLORES['verde'])
        return f"{cls.COLORES['negrita']}{color_code}🦕 SAUR: {cls.COLORES['reset']}{mensaje}"

    @classmethod
    def usuario(cls, mensaje: str) -> str:
        """Muestra el mensaje del usuario."""
        return f"{cls.COLORES['azul']}{cls.COLORES['negrita']}👤 Usuario: {cls.COLORES['reset']}{mensaje}"

    @classmethod
    def sistema(cls, mensaje: str) -> str:
        """Muestra mensajes del sistema."""
        return f"{cls.COLORES['gris']}[SYS] {mensaje}{cls.COLORES['reset']}"

    @classmethod
    def estado(cls, mensaje: str) -> str:
        """Muestra informacion de estado."""
        return f"{cls.COLORES['cyan']}📊 {mensaje}{cls.COLORES['reset']}"

    @classmethod
    def error(cls, mensaje: str) -> str:
        """Muestra mensajes de error."""
        return f"{cls.COLORES['rojo']}⚠️ ERROR: {mensaje}{cls.COLORES['reset']}"

    @classmethod
    def success(cls, mensaje: str) -> str:
        """Muestra mensajes de exito."""
        return f"{cls.COLORES['verde']}✅ {mensaje}{cls.COLORES['reset']}"

    @classmethod
    def banner(cls):
        """Muestra el banner de inicio."""
        print(cls.COLORES['negrita'] + cls.COLORES['verde'] + """
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🦕 SAUROLLAMA CLI - Centro de Mando DellSaurio 🦕          ║
║                                                              ║
║   Modelo: gemma:2b | Interfaz: Cyberpunk Terminal            ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
""" + cls.COLORES['reset'])


# =============================================================================
# LOGICA PRINCIPAL DEL CLI
# =============================================================================

class SaurOllamaCLI:
    """Aplicacion principal de la CLI de SaurOllama."""

    def __init__(self, log_file: str = None):
        self.ejecutando = True
        self.ui = InterfazCyberpunk()

        # Registrar inicio de sesion
        log_manager.log_audit("SaurOllama CLI iniciado correctamente.")
        log_manager.log_audit(f"Telemetria inicial: {obtener_telemetria_bash()}")

    def iniciar(self):
        """Inicia el loop principal de la aplicacion."""
        self.ui.banner()
        self._verificar_servicios()

        print(self.ui.sistema("Escribe '/ayuda' para ver comandos disponibles"))
        print(self.ui.sistema("Escribe 'salir' para terminar\n"))

        while self.ejecutando:
            try:
                self._procesar_entrada()
            except KeyboardInterrupt:
                self._manejar_salida()
            except Exception as e:
                log_manager.log_error("Error en el loop principal", e)
                print(self.ui.error(f"Error inesperado: {str(e)}"))

        print(self.ui.sistema("\nSesion finalizada."))
        log_manager.log_audit("Sesion finalizada por el usuario.")

    def _verificar_servicios(self):
        """Verifica el estado de los servicios necesarios."""
        print(self.ui.sistema("Verificando servicios..."))

        # Verificar Ollama
        if brain.verificar_servicio():
            print(self.ui.success(f"Ollama operativo ({brain.modelo})"))
        else:
            print(self.ui.error("Ollama no disponible (modo simulacion)"))
            print(self.ui.sistema("Para activar Ollama: ollama serve"))

        # Mostrar status del sistema
        print(self.ui.estado(formatear_status_sistema()))
        print()

    def _procesar_entrada(self):
        """Procesa la entrada del usuario."""
        entrada = input(f"{self.ui.usuario('')} ").strip()

        if not entrada:
            return

        # Comandos especiales (sin necesidad de IA)
        if entrada.lower() in ['salir', 'exit', 'quit', 'adiós', 'chao']:
            self._manejar_salida()
            return

        if entrada.lower() == '/ayuda':
            self._mostrar_ayuda()
            return

        if entrada.lower() == '/status':
            self._mostrar_status()
            return

        if entrada.lower() == '/clear':
            os.system('clear' if os.name != 'nt' else 'cls')
            return

        # Cualquier otro mensaje va al cerebro (Ollama)
        self._procesar_con_ia(entrada)

    def _procesar_con_ia(self, mensaje: str):
        """Procesa el mensaje usando la IA (Ollama)."""
        print(f"\n{self.ui.dinosaurio('Procesando...', 'amarillo')}")

        try:
            # Clasificar intencion primero
            intencion = brain.clasificar_intencion(mensaje)
            print(self.ui.sistema(f"Intencion detectada: {intencion}"))

            # Manejar intenciones especiales
            if intencion == 'STATUS':
                respuesta = formatear_status_sistema()
                print(f"\n{self.ui.dinosaurio(respuesta)}")
                log_manager.log_chat(mensaje, respuesta)
                return

            if intencion == 'TERMINAR':
                print(f"\n{self.ui.dinosaurio('Hasta luego! Fue un placer conversar contigo.')}")
                log_manager.log_chat(mensaje, "Sesion terminada")
                self.ejecutando = False
                return

            # Para otras intenciones, usar chat normal (sin streaming para CLI simple)
            respuesta = brain.chat(mensaje)

            print(f"\n{self.ui.dinosaurio(respuesta)}")
            log_manager.log_chat(mensaje, respuesta)

        except Exception as e:
            log_manager.log_error("Error al procesar con IA", e)
            print(self.ui.error(f"No pude procesar tu mensaje: {str(e)}"))

    def _mostrar_ayuda(self):
        """Muestra la ayuda de comandos disponibles."""
        ayuda = """
╔══════════════════════════════════════════════════════════════╗
║                    COMANDOS DISPONIBLES                       ║
╠══════════════════════════════════════════════════════════════╣
║  /status    - Ver estado del sistema (CPU, RAM)              ║
║  /ayuda     - Mostrar esta ayuda                             ║
║  /clear     - Limpiar pantalla                               ║
║                                                              ║
║  (cualquier otro texto sera procesado por la IA)             ║
║                                                              ║
║  salir      - Terminar la sesion                            ║
╚══════════════════════════════════════════════════════════════╝
"""
        print(self.ui.sistema(ayuda))

    def _mostrar_status(self):
        """Muestra el estado actual del sistema."""
        print(self.ui.estado("Obteniendo status..."))
        print(f"\n{self.ui.estado(formatear_status_sistema())}")
        log_manager.log_audit(f"Consulta de status manual: {formatear_status_sistema()}")

    def _manejar_salida(self):
        """Maneja la salida graceful del programa."""
        print(f"\n{self.ui.dinosaurio('Apagando motores... hasta la proxima!')}")
        self.ejecutando = False


# =============================================================================
# PUNTO DE ENTRADA
# =============================================================================

def main():
    """Punto de entrada principal de la aplicacion."""
    # Parsear argumentos de linea de comandos
    parser = argparse.ArgumentParser(
        description='SaurOllama CLI - Centro de Mando Cyberpunk',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
    python3 saurollama_cli.py                  # Iniciar con logging por defecto
    python3 saurollama_cli.py --log-file /tmp/auditoria.log  # Log personalizado
        """
    )

    parser.add_argument(
        '--log-file',
        type=str,
        default=None,
        help='Ruta personalizada para el archivo de log de auditoria'
    )

    parser.add_argument(
        '--modelo',
        type=str,
        default='gemma:2b',
        choices=MODELOS_DISPONIBLES,
        help=f'Modelo de Ollama a usar (default: gemma:2b)'
    )

    args = parser.parse_args()

    # Cambiar modelo si se especifico
    if args.modelo:
        brain.modelo = args.modelo
        log_manager.log_audit(f"Modelo cambiado a: {args.modelo}")

    # Crear y ejecutar la aplicacion
    cli = SaurOllamaCLI(log_file=args.log_file)
    cli.iniciar()


if __name__ == "__main__":
    main()
