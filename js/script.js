import { Modal } from './modal.js'

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// 3 maneiras de criar e atribuir função ao evento
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        alert('data error')
        return;
    }

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

function notANumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(1)
}