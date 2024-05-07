export const Alert = {
    element: document.querySelector('.alert-error'),
    open() {
        Alert.element.classList.add('open')
    },
    close() {
        Alert.element.classList.remove('open')
    },
}