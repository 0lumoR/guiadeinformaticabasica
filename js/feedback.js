// feedback.js
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // cancela envio só se inválido
    event.stopPropagation();
    alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
  }

  form.classList.add("was-validated"); // efeito do Bootstrap
});



