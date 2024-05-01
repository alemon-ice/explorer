let randomNumber = generateRandomNumber()
let totalAttempts = 0
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDownPress)

function generateRandomNumber() {
    return Math.round(Math.random() * 10)
}

function handleTryClick(event) {
    event.preventDefault()
    
    totalAttempts++
    
    const input = document.querySelector('#inputNumber')

    const inputNumberValue = Number(input.value)

    if (!inputNumberValue || inputNumberValue < 0 || inputNumberValue > 10) {
        alert('Número inválido, escolha entre 0 e 10')
    }
    else if (Number(inputNumberValue) === randomNumber) {
        document.querySelector('.screen2 h2').innerText = `Acertou em ${totalAttempts} tentativa(s)`
        toggleScreen()
    } else {
        alert('Não foi dessa vez, tente novamente')
    }
    input.value = '0'
}

function handleResetClick(event) {
    event?.preventDefault()

    randomNumber = generateRandomNumber()
    totalAttempts = 0

    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleKeyDownPress (event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
