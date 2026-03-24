document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuFormulario");
    const status = document.getElementById("statusEnvio");
    const botao = document.getElementById("btnEnviar");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const msg = document.getElementById("mensagem").value;

        if (nome.trim() === "" || email.trim() === "" || msg.trim() === "") {
            status.style.color = "#3ee8ff";
            status.innerText = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        botao.disabled = true;
        botao.innerText = "ENVIANDO...";
        status.style.color = "#3498db";
        status.innerText = "Conectando...";

        setTimeout(function() {
            status.style.color = "#2ecc71";
            status.innerText = "Obrigado! Assim que possível retornarei o contato";
            
            formulario.reset();
            
            botao.disabled = false;
            botao.innerText = "ENVIAR";
        }, 2000);
    });
});