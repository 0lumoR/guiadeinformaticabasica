// feedback.js
const form = document.querySelector('form');

form.onsubmit = function(event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // impede envio se inválido
    alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
  } else {
    // deixa o formSubmit cuidar do redirecionamento
    alert("✅ Obrigado pela sua avaliação!");
  }
};



