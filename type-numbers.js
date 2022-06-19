// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;

console.log(soma);

// ponto flutuante

const meuNumero2 = 3.14;

const primeiroNumero2 = 3.3;
const segundoNumero2 = .5;

const divisao = primeiroNumero2 / segundoNumero2;

console.log(divisao);

// NaN - Not a Number - não é um número

const alura = 'Alura';
console.log(alura * primeiroNumero); // NaN

const pi = 3.14;
const raio = 5;
const area = pi * raio * raio;
console.log(area);

// criar programa que calcula equações de segundo grau

const a = 5;
const b = -3;
const c = 4;
const delta = b * b - 4 * a * c;
const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log(x1, x2);