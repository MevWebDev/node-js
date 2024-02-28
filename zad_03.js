const LISTA = [-10, 0, 3, -2, 12, 23, -69]
for (const x of LISTA) {
    console.log(x)
}
const max = Math.max(...LISTA)
const min = Math.min(...LISTA)
console.log(`Największa liczba to: ${max}`)
console.log(`Największa liczba to: ${min}`)
const REVERSED_LISTA = LISTA.reverse();
console.log("Odwrócona lista to:\n" + REVERSED_LISTA)