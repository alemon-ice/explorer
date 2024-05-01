const randomNumber = Math.round(Math.random() * 10)
let totalAttempts = 0

function handleClick(event) {
    event.preventDefault()
    
    totalAttempts++
    
    const inputNumber = document.querySelector('#inputNumber').value

    if (Number(inputNumber) === randomNumber) {
        document.querySelector('.screen1').classList.add('hide')
        document.querySelector('.screen2 h2').innerText = `Acertou em ${totalAttempts} tentativa(s)`
        document.querySelector('.screen2').classList.remove('hide')
    }
}