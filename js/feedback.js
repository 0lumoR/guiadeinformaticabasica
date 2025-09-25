document.querySelector('form').onsubmit = function() {
            alert('Seu formulário foi enviado com sucesso! Você será redirecionado em breve.');
        };

        form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert("⚠️ Preencha todos os campos obrigatórios!");
    return;
  }


})
