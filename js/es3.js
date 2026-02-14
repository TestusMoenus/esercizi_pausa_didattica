const outputris = document.querySelector('#outputris');
const inputField = document.querySelector('#inputField');


inputField.addEventListener('input', () => {
    const invertedText = inputField.value.split('').reverse().join('');
    outputris.innerHTML = invertedText; 
});