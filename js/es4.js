const inputTypes = document.querySelectorAll(".form-control, #checkMostraPass, .btn")

// Recuperiamo il contenitore giallo 
const container = document.querySelector(".bg-warning");

inputTypes.forEach(elemento => {

    if (elemento.id === "checkMostraPass") {
        elemento.addEventListener("change", function() {
            inputTypes.forEach(campo => {
                if (campo.hasAttribute("data-user-pwd")) {
                    campo.type = this.checked ? "text" : "password";
                }
            });
        });
    }

    
    if (elemento.classList.contains("btn")) {
        elemento.addEventListener("click", event => {
            // Impediamo il refresh della pagina al click sul tasto submit
            event.preventDefault();

            let userNameField = null;
            
            // Cerchiamo il campo username nella tua lista 
            inputTypes.forEach(campo => {
                if (campo.hasAttribute("data-user-name")) {
                    userNameField = campo;
                }
            });

            // Controlliamo se lo username non è vuoto
            if (userNameField && userNameField.value.trim() !== "") {
                const nomeInMaiuscolo = userNameField.value.toUpperCase();
                container.innerHTML = `<h1 class="text-center p-5">Benvenuto ${nomeInMaiuscolo}</h1>`;
            } else {
                alert("Per favore, inserisci uno username!");
            }
        });
    }
});