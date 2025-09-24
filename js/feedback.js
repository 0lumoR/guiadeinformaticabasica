const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // impede envio se campos obrigatórios não estiverem preenchidos
    alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
  } else {
    // deixa o form enviar os dados normalmente
    // exibe o alert de agradecimento após um pequeno delay para não bloquear o envio
    setTimeout(() => {
      alert("✅ Obrigado pela sua avaliação!");
      // o FormSubmit fará o redirecionamento para a página de agradecimento automaticamente
    }, 100);
  }
});




