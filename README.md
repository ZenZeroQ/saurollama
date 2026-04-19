# 🦖 SaurOllama CLI & Web Control Center

SaurOllama es un agente de IA local diseñado para ejecutarse en hardware **Dell Latitude (DellSaurio)** bajo Linux Mint. Integra modelos de lenguaje (Ollama) con capacidades de monitoreo de sistema, lectura de noticias (RSS) y clima en tiempo real.

## 🚀 Características
- **Dual Interface:** Acceso vía terminal (CLI) con estética Cyberpunk y servidor Web (Flask).
- **System Awareness:** Monitoreo en tiempo real de CPU y RAM.
- **RAG Engine:** Capacidad de analizar archivos locales (.txt, .html) y fuentes externas.
- **Audit Mode:** Registro detallado de cada interacción en `saurollama_audit.log`.

## 🛠️ Stack Tecnológico
- **Lenguaje:** Python 3.12
- **IA:** Ollama (Modelo Gemma:2b)
- **Frameworks:** Flask (Web), Rich (Terminal UI)
- **OS:** Linux Mint 21.3

## 📦 Instalación Directa
1. Clonar el repo: `git clone https://github.com/zenzeroq/saurollama.git`
2. Instalar dependencias: `pip install ollama psutil requests feedparser rich flask`
3. Ejecutar CLI: `python3 saurollama_cli.py`

---
*Desarrollado con una mentalidad de IT Generalist y filosofía de código abierto.*
