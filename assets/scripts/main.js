const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")

const setError = (element, message) => {
  element.classList.add("InputRequired")
  element.parentElement.querySelector('.Form__Row__Notice').innerText = message
}
const isEmailValid = (email) => {
  var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (validEmailRegex.test(email)) {
    return true
  } else {
    return false
  }
}


const isPhoneValid = (phone) => {
  var validPhoneRegex = /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{4}$/
  if (validPhoneRegex.test(phone)) {
    return true
  } else {
    return false
  }
}


const validateInputs = () => {
  const nameInputValue = nameInput.value.trim()
  const emailInputValue = emailInput.value.trim()
  const phoneInputValue = phoneInput.value.trim()

  if (nameInputValue === "") {
    setError(nameInput, 'Required')
    nameInput.classList.add('Form__Row__Input__Required')
    nameInput.classList.remove('Form__Row__Input__Valid')
  } else {
    setError(nameInput, '')
    nameInput.classList.add('Form__Row__Input__Valid')
    nameInput.classList.remove('Form__Row__Input__Required')
  }

  if (emailInputValue === "") {
    setError(emailInput, 'Required')
    emailInput.classList.add('Form__Row__Input__Required')
    emailInput.classList.remove('Form__Row__Input__Valid')
  } else if (emailInputValue !== "" && isEmailValid(emailInputValue)) {
    setError(emailInput, '')
    emailInput.classList.remove('Form__Row__Input__Valid')
    emailInput.classList.remove('Form__Row__Input__Required')
    emailInput.classList.add('Form__Row__Input__Valid')
  } else {
    setError(emailInput, 'Email is not Valid')
    emailInput.classList.add('Form__Row__Input__InValid')
    emailInput.classList.remove('Form__Row__Input__Required')
    emailInput.classList.remove('Form__Row__Input__Valid')
  }


  if (phoneInputValue === "") {
    setError(phoneInput, 'Required')
    phoneInput.classList.add('Form__Row__Input__Required')
    phoneInput.classList.remove('Form__Row__Input__Valid')
  } else if (phoneInputValue !== "" && isPhoneValid(phoneInputValue)) {
    setError(phoneInput, '')
    phoneInput.classList.remove('Form__Row__Input__Valid')
    phoneInput.classList.remove('Form__Row__Input__Required')
    phoneInput.classList.add('Form__Row__Input__Valid')
  } else {
    setError(phoneInput, 'Phone is not Valid')
    phoneInput.classList.add('Form__Row__Input__InValid')
    phoneInput.classList.remove('Form__Row__Input__Required')
    phoneInput.classList.remove('Form__Row__Input__Valid')
  }



}
