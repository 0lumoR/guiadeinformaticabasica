// feedback.js
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // cancela envio só se inválido
    event.stopPropagation();
    alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
  } else {
    // NÃO usar preventDefault aqui
    // deixa o FormSubmit enviar e redirecionar para agradecimento.html
    alert("✅ Obrigado pela sua avaliação!");
  }

  form.classList.add("was-validated"); // efeito do Bootstrap
});


