let num = [5,8,2,9,3]
num.push(1) //adicionar um numero na primeira posicao
num.sort() //adicionar um numero na ultima posicao
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro vetor e ${num[0]}`)
let pos = num.indexOf(5) //procurar valor
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
