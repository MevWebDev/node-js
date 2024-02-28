const TABLICA = [3,4,5]
let isPositive = true
let isTriangle = true
for (const x of TABLICA){
    if (x <= 0){
        isPositive = false     
        break   
    }
}
if (isPositive == false){
    console.log("To nie są dodatnie liczby!")
}
else{
    if ((TABLICA[0] + TABLICA[1] < TABLICA[2]) || (TABLICA[2] + TABLICA[0] < TABLICA[1]) || (TABLICA[1] + TABLICA[2] < TABLICA[0])){
        isTriangle = false        
    }
    console.log(isTriangle ? "Jest trojkat":'Nie jest trojkat')
}

