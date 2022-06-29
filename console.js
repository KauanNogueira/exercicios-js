console.time()
for (let i = 0; i < 100000; i++) {
    let a = i * 85;
    let b = Math.sqrt(Math.pow(Math.pow(a, a), 54))
    console.log(b)
}

console.timeEnd()
