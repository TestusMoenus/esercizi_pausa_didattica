const radioButtons = document.querySelectorAll('input[name="sceltaSondaggio"]');
const campoNascosto = document.querySelector("#containerAltro");
const radioAltro = document.querySelector("#radioAltro");

radioButtons.forEach(radio => {
    radio.addEventListener("change", () => {
        
        if (radioAltro.checked) {
            campoNascosto.classList.remove("d-none");
        } else {
            campoNascosto.classList.add("d-none");            
            document.querySelector("#inputAltro").value = "";
        }
    });
});