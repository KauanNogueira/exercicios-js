// tipo string

const texto1 = 'Olá mundo!';
const texto2 = "Olá mundo!";
const senha = 'senha super segura!';

const stringDeNumeros = '34567';

const citacao = "Meu nome é ";
const meuNome = 'Kauan';
console.log(citacao);

// template strings - string de forma literal

const templateString = `Olá mundo! ${senha}`;
console.log(templateString);

// contatenação de strings

console.log(citacao + meuNome)

const cpf = '123.456.789-10';
const cpfSemPontos = cpf.replace(/\./g, '');
console.log(cpfSemPontos);
