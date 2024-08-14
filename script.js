// variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// 3 maneiras de criar e atribuir função ao evento
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputWeight.value
}

// or
// form.submit = () => {}

// or
// form.onsubmit = handleSubmit
// function handleSubmit() {}
