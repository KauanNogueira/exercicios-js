function soma(a, b) {
    return a + b;
}

//ordem dos parametros


function nomeIdade(nome, idade) {
    return `Olá ${nome}! Parabéns pelos ${idade} anos`
}

console.log(nomeIdade('matheus', 17))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(12, 98), soma(123, -98)))