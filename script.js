// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

// 3 maneiras de criar e atribuir função ao evento
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `O seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// or
// form.submit = () => {}

// or
// form.onsubmit = handleSubmit
// function handleSubmit() {}


Modal.buttonClose.onclick = () => Modal.close()

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(1)
}