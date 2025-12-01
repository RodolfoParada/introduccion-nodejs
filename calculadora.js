const readline = require('readline');

// ** Clase Calculadora (Tu código original) **
class Calculadora {
  constructor() {
    this.operaciones = [];
  }
  sumar(a, b) {
    const resultado = a + b;
    this.registrarOperacion('suma', a, b, resultado);
    return resultado;
  }
  restar(a, b) {
    const resultado = a - b;
    this.registrarOperacion('resta', a, b, resultado);
    return resultado;
  }
  multiplicar(a, b) {
    const resultado = a * b;
    this.registrarOperacion('multiplicación', a, b, resultado);
    return resultado;
  }
  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    const resultado = a / b;
    this.registrarOperacion('división', a, b, resultado);
    return resultado;
  }
  registrarOperacion(tipo, a, b, resultado) {
    this.operaciones.push({
      tipo,
      operandos: [a, b],
      resultado,
      timestamp: new Date()
    });
  }
  obtenerHistorial() {
    return this.operaciones.map(op => ({
      operacion: `${op.operandos[0]} ${this.obtenerSimbolo(op.tipo)} ${op.operandos[1]} = ${op.resultado}`,
      fecha: op.timestamp.toLocaleString()
    }));
  }
  obtenerSimbolo(tipo) {
    const simbolos = {
      suma: '+',
      resta: '-',
      multiplicación: '×',
      división: '÷'
    };
    return simbolos[tipo] || '?';
  }
  obtenerEstadisticas() {
    const total = this.operaciones.length;
    const tipos = this.operaciones.reduce((acc, op) => {
      acc[op.tipo] = (acc[op.tipo] || 0) + 1;
      return acc;
    }, {});
    return { total, tipos };
  }
}

// ** Lógica de Interacción con la Consola **

const calculadora = new Calculadora();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Muestra el menú de opciones.
 */
function mostrarMenu() {
  console.log('\n--- Calculadora de Consola ---');
  console.log('1. Sumar');
  console.log('2. Restar');
  console.log('3. Multiplicar');
  console.log('4. Dividir');
  console.log('5. Ver Historial');
  console.log('6. Ver Estadísticas');
  console.log('0. Salir');
  console.log('------------------------------');
}

/**
 * Función que pide dos números y ejecuta la operación.
 * @param {string} operacion - Nombre de la operación a ejecutar (ej: 'sumar').
 * @param {function} metodo - El método de la calculadora a llamar.
 */
function pedirOperandos(operacion, metodo) {
  rl.question(`\nIngrese el primer número para ${operacion}: `, (a) => {
    rl.question(`Ingrese el segundo número para ${operacion}: `, (b) => {
      const numA = parseFloat(a);
      const numB = parseFloat(b);

      if (isNaN(numA) || isNaN(numB)) {
        console.log('Error: Ambos valores deben ser números válidos.');
      } else {
        try {
          const resultado = metodo(numA, numB);
          console.log(`\n✅ Resultado de la ${operacion}: ${resultado}`);
        } catch (error) {
          console.log(`Error al ejecutar la operación: ${error.message}`);
        }
      }
      ejecutarMenu(); // Volver al menú
    });
  });
}

/**
 * Función principal que maneja la selección del usuario.
 */
function ejecutarMenu() {
  mostrarMenu();
  rl.question('Seleccione una opción (0-6): ', (opcion) => {
    switch (opcion.trim()) {
      case '1':
        pedirOperandos('suma', calculadora.sumar.bind(calculadora));
        break;
      case '2':
        pedirOperandos('resta', calculadora.restar.bind(calculadora));
        break;
      case '3':
        pedirOperandos('multiplicación', calculadora.multiplicar.bind(calculadora));
        break;
      case '4':
        pedirOperandos('división', calculadora.dividir.bind(calculadora));
        break;
      case '5':
        const historial = calculadora.obtenerHistorial();
        console.log('\n--- Historial de Operaciones ---');
        if (historial.length === 0) {
            console.log('No hay operaciones registradas.');
        } else {
            historial.forEach(item => console.log(`[${item.fecha}] ${item.operacion}`));
        }
        ejecutarMenu();
        break;
      case '6':
        const estadisticas = calculadora.obtenerEstadisticas();
        console.log('\n--- Estadísticas ---');
        console.log(`Total de Operaciones: ${estadisticas.total}`);
        console.log('Detalle por Tipo:');
        for (const tipo in estadisticas.tipos) {
            console.log(`  - ${tipo}: ${estadisticas.tipos[tipo]}`);
        }
        ejecutarMenu();
        break;
      case '0':
        console.log('👋 ¡Gracias por usar la calculadora! Saliendo...');
        rl.close(); // Cierra la interfaz y termina el programa
        break;
      default:
        console.log('⚠️ Opción no válida. Por favor, intente de nuevo.');
        ejecutarMenu();
        break;
    }
  });
}

// ** Iniciar la aplicación **
ejecutarMenu();