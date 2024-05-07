export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal .title button.close'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },
    displayResultMessage(result) {
        Modal.message.innerText = "Seu IMC é de " + result
        Modal.open()
    }
}

Modal.btnClose.onclick = function () {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}