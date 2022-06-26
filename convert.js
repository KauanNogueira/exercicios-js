//tipos de dados
//booleanos

//conversão implícita
const numero = 456;
const numeroString = Number("456");

console.log(numero == numeroString)

//Number()
console.log(numero + numeroString)
//String()
console.log(String(numero) + String(numeroString))

const height = "12";
const length = "12";

if (height === Number(height) && length === Number(length)) {
    const area = height * length
    console.log(`The rectangle area is ${area}`)
} else {
    const area = Number(height) * Number(length)
    console.log(`You probably wrote something wrong, like some number as a string, but I think you expect the rectangle area as: ${area}`)
}