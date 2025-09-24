// feedback.js
const form = document.querySelector('form');

form.onsubmit = function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // impede o envio só quando inválido
    alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
  } else {
    // aqui você NÃO usa preventDefault()
    // deixa o formsubmit.co enviar normalmente
    alert("✅ Obrigado pela sua avaliação!");
  }

  form.classList.add("was-validated"); // efeito do bootstrap
};

