// archivo: calculadora.js
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

// Uso de la calculadora
const calc = new Calculadora();

// Realizar algunas operaciones
console.log('=== CALCULADORA NODE.JS ===\n');

console.log('2 + 3 =', calc.sumar(2, 3));
console.log('10 - 4 =', calc.restar(10, 4));
console.log('5 × 6 =', calc.multiplicar(5, 6));
console.log('15 ÷ 3 =', calc.dividir(15, 3));

console.log('\n=== HISTORIAL DE OPERACIONES ===');
const historial = calc.obtenerHistorial();
historial.forEach((op, index) => {
  console.log(`${index + 1}. ${op.operacion} (${op.fecha})`);
});

console.log('\n=== ESTADÍSTICAS ===');
const stats = calc.obtenerEstadisticas();
console.log(`Total de operaciones: ${stats.total}`);
console.log('Operaciones por tipo:', stats.tipos);

console.log('\n=== INFORMACIÓN DEL SISTEMA ===');
console.log('Node.js versión:', process.version);
console.log('Plataforma:', process.platform);
console.log('Arquitectura:', process.arch);
console.log('Directorio actual:', process.cwd());
console.log('Uptime de Node:', Math.round(process.uptime()), 'segundos');