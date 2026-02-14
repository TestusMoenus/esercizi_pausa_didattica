const outputris = document.querySelector('#outputris')
const inputField = document.querySelector('#inputField')
const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    outputris.innerHTML = ''
    outputris.innerHTML = (inputField.value).trim().length >= 5 && (inputField.value).trim().length <= 10 ? `user name VALIDO !` : `user name INVALIDO !`
    inputField.value = ''
})