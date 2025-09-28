document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-sorteador").addEventListener("submit", function(evento){
        evento.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
            if (isNaN(numeroMaximo) || numeroMaximo < 2) {
            alert("Digite um número maior ou igual a 2!");
        return;
}

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById("resultado-valor").innerText = numeroAleatorio;
        document.querySelector(".resultado").style.display = "block";
    })
})