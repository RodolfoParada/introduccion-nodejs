// Task 1: ¿Qué es Node.js y para qué sirve? (10 minutos)
// Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript 
// fuera del navegador web, específicamente en el servidor.

// La Historia de JavaScript
// JavaScript nació en 1995 como un lenguaje para agregar interactividad a páginas web en el
// navegador. Durante años, JavaScript estuvo limitado al frontend:

// Ventaja: Lenguaje universal para web
// Limitación: Solo funcionaba en navegadores
// Problema: Los desarrolladores tenían que aprender múltiples lenguajes (PHP, Python, Java, etc.) 
// para el backend
// El Nacimiento de Node.js
// En 2009, Ryan Dahl presenta Node.js en una conferencia. La idea revolucionaria: 
// ¿Por qué no ejecutar JavaScript en el servidor?

// El mismo lenguaje en frontend y backend
// Antes: JavaScript en navegador + PHP/Python/Java en servidor
// Después: JavaScript en todas partes

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde Node.js!');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});


// Arquitectura y Filosofía de Node.js
// 1. Single-threaded con event loop

// Node.js usa un solo hilo principal
// El event loop maneja operaciones asíncronas
// No bloquea el hilo mientras espera I/O
// 2. Non-blocking I/O

// Operación bloqueante (tradicional)
const data = readFileSync('archivo.txt'); // Espera hasta terminar
console.log('Archivo leído:', data);

// Operación no bloqueante (Node.js)
readFile('archivo.txt', (err, data) => {
  console.log('Archivo leído:', data);
});
console.log('Esta línea se ejecuta inmediatamente');


// 3. NPM (Node Package Manager)

// Más de 2.3 millones de paquetes disponibles
// Sistema de gestión de dependencias robusto
// Herramientas de automatización incluidas
// Casos de Uso de Node.js
// APIs y Microservicios

// API REST rápida y escalable
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);

// Aplicaciones en Tiempo Real

// Chat, gaming, colaboración en tiempo real
const io = require('socket.io');
io.on('connection', (socket) => {
  socket.on('mensaje', (data) => {
    socket.broadcast.emit('mensaje', data);
  });
});

// Herramientas de Desarrollo

// Build tools, linters, bundlers
const webpack = require('webpack');
// const babel = require('babel');
// const eslint = require('eslint');

// IoT y Edge Computing

// Ejecutar JavaScript en dispositivos
const sensor = require('gpio-sensor');
sensor.on('data', (value) => {
  console.log('Lectura del sensor:', value);
});