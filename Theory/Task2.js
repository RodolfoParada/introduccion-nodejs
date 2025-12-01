// Task 2: Instalación y Configuración Básica (8 minutos)
// Node.js se instala fácilmente en múltiples plataformas y viene con NPM incluido.

// Instalación en Diferentes Sistemas
// macOS - Usando Homebrew

// # Instalar Homebrew si no lo tienes
// /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

// # Instalar Node.js (versión LTS recomendada)
// brew install node

// # Verificar instalación
// node --version  # v18.x.x o superior
// npm --version   # 9.x.x o superior
// Windows - Instalador Oficial

// Ir a https://nodejs.org/
// Descargar la versión LTS (recomendada)
// Ejecutar el instalador
// Verificar instalación en terminal:
// node --version
// npm --version
// Linux (Ubuntu/Debian)

// # Usando NodeSource (recomendado)
// curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
// sudo apt-get install -y nodejs

// # Verificar
// node --version
// npm --version
// Verificación de Instalación
// # Versión de Node.js
// node --version

// # Versión de NPM
// npm --version

// # Información completa del sistema
// node -p "process.versions"

// # Arquitectura del sistema
// node -p "process.arch"

// # Plataforma
// node -p "process.platform"
// Configuración Básica
// # Ver configuración actual
// npm config list

// # Configurar información de usuario
// npm config set init-author-name "Tu Nombre"
// npm config set init-author-email "tu.email@example.com"

// # Configurar editor por defecto
// npm config set editor "code"

// # Crear archivo .npmrc global
// npm config set save-exact true  # Guardar versiones exactas
// npm config set progress false   # Desactivar barra de progreso