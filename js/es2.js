const outputris = document.querySelector('#outputris')
const inputField = document.querySelector('#inputField')
const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    let new_item = document.createElement('li')
    new_item.innerHTML = Number(inputField.value)
    outputris.append(new_item)
    inputField.value = ''
})