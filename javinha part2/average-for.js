const notas = [12, 11, 12, 9];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

let media = somaDasNotas / notas.length

console.log(media)

