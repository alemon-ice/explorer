let n1 = Number(prompt('Infomre o primeiro número'))
let n2 = Number(prompt('Infomre o segundo número'))

alert('A soma dos dois números é: ' + (n1 + n2))
alert('A subtração dos dois números é: ' + (n1 - n2))
alert('A multiplicação dos dois números é: ' + (n1 * n2))
alert('A divisão dos dois números é: ' + (n1 / n2))
alert('O resto da divisão dos dois números é: ' + (n1 % n2))
if ((n1 + n2) % 2 === 0) {
    alert('A soma dos dois números é: par')
} else {
    alert('A soma dos dois números é: ímpar')
}
if (n1 === n2) {
    alert('Os números são iguais')
} else {
    alert('Os números não são iguais')
}
