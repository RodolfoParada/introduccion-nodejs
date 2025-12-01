// Task 3: Ejecutar Scripts con Node.js (8 minutos)
// Node.js puede ejecutar código JavaScript desde archivos o directamente desde la línea de comandos.

// Ejecutar Archivos JavaScript
// archivo: hola.js
console.log('¡Hola desde Node.js!');
console.log('Versión de Node:', process.version);
console.log('Plataforma:', process.platform);
console.log('Directorio actual:', process.cwd());
// # Ejecutar el archivo
// node hola.js

// # Output esperado:
// # ¡Hola desde Node.js!
// # Versión de Node: v18.x.x
// # Plataforma: darwin/linux/win32
// # Directorio actual: /ruta/al/directorio
// REPL (Read-Eval-Print Loop)
// # Iniciar REPL interactivo
// node

// # Dentro del REPL
// > console.log('Hola REPL!')
// Hola REPL!
// > 2 + 2
// 4
// > const suma = (a, b) => a + b;
// > suma(5, 3)
// 8
// > .exit  # Salir del REPL
// Ejecutar Código Directamente
// # Ejecutar código inline
// node -e "console.log('Hola desde línea de comandos!')"

// # Ejecutar con argumentos
// node -e "console.log('Argumento:', process.argv[2])" "mi argumento"

// # Imprimir versión con formato
// node -p "process.version"
// Variables Globales en Node.js
// Variables globales importantes en Node.js
console.log('__dirname:', __dirname);    // Directorio del archivo actual
console.log('__filename:', __filename);  // Ruta completa del archivo
console.log('process.cwd():', process.cwd()); // Directorio de trabajo actual
console.log('process.env:', process.env.NODE_ENV || 'development');

// Argumentos de línea de comandos
console.log('process.argv:', process.argv);

// Información del proceso
console.log('PID:', process.pid);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);