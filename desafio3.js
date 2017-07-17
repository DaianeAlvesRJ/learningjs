'use strict'
//"use strict"; não deve ter ponto e virgula e as aspas devem ser as simples

function media(n1,n2,n3){
     return (n1*3 + n2*4 + n3*5)/ 12 >= 6
}

function mediaJu(a, b, c){
    // não é necessario tantos (), deve ser usado apenas quando for, assim se mantem o codigo limpo
    return (a*3 + b*4 + c*5)/12 >= 6 
}


console.log(media(0,6,7))
console.log(mediaJu(0,6,7))