const LISTA2 = [1, 5, 6, 5, 5, 1, 5]

for (const i of LISTA2){
    let sum = 0
    for (const j of LISTA2){
        if (j == i) {
            sum += 1
        }
    }
    console.log(`${i} występuje ${sum} raz${sum==1?'':'y'}`)
}