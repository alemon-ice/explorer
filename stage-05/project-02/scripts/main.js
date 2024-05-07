import { Modal } from './modal.js'
import { Alert } from './alert.js'
import { calcIMC, isNotANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNaN = isNotANumber(weight) || isNotANumber(height)

    if (weightOrHeightIsNaN) {
        Alert.open()
        return
    }

    Alert.close()

    const imc = calcIMC(weight, height)
    Modal.displayResultMessage(imc)
}

inputWeight.oninput = handleChangeInput
inputHeight.oninput = handleChangeInput
function handleChangeInput() {
    Alert.close()
}