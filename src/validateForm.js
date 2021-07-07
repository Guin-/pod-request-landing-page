const form = document.querySelector('.access-form')
const emailField = document.querySelector('.access-form-input')
const errorDiv = document.querySelector('.error-message')

form.onsubmit = submit
emailField.oninvalid = invalid

function invalid(event) {
  errorDiv.removeAttribute('hidden')
}

function submit(event) {
  event.preventDefault();
}
