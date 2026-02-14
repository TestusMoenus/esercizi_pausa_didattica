const outputris = document.querySelector('#outputris')
const inputField = document.querySelector('#inputField')
const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    outputris.innerHTML = ''
    outputris.innerHTML = Number(inputField.value)%2 === 0 ? `il numero è PARI !` : `il numero è DISPARI !`
    inputField.value = ''
})