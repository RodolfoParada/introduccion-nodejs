// Task 4: Introducción a NPM y Gestión de Paquetes (4 minutos)
// NPM es el gestor de paquetes oficial de Node.js y el más grande del mundo.

// Inicializar un Proyecto
// # Crear directorio del proyecto
// mkdir mi-proyecto
// cd mi-proyecto

// # Inicializar proyecto (crea package.json)
// npm init

// # O inicializar con valores por defecto
// npm init -y

// # Ver el package.json creado
// cat package.json
// Instalar Paquetes
// # Instalar paquete globalmente
// npm install -g nodemon  # Para desarrollo

// # Instalar paquete en el proyecto
// npm install express    # Instala y guarda en dependencies

// # Instalar versión específica
// npm install express@4.18.0

// # Instalar como dependencia de desarrollo
// npm install --save-dev jest

// # Instalar múltiples paquetes
// npm install express cors helmet

// # Instalar desde package.json
// npm install
// Tipos de Dependencias
{
  "dependencies": {
    "express": "^4.18.0"      // Dependencias de producción
  },
  "devDependencies": {
    "jest": "^29.0.0",        // Solo para desarrollo
    "nodemon": "^2.0.0"
  },
  "peerDependencies": {
    "react": "^18.0.0"        // Dependencias entre paquetes
  }
}

// Comandos Útiles de NPM
// # Ver paquetes instalados
// npm list
// npm list --depth=0  # Solo dependencias directas

// # Buscar paquetes
// npm search express

// # Ver información de paquete
// npm info express
// npm view express versions  # Ver todas las versiones

// # Actualizar paquetes
// npm update
// npm update express

// # Remover paquetes
// npm uninstall express
// npm uninstall nodemon --save-dev

// # Ejecutar scripts
// npm run start
// npm run dev
// npm run test
// npm run build
// Scripts Personalizados
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}