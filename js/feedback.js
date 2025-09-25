document.querySelector('form').onsubmit = function() {
            alert('Seu formulário foi enviado com sucesso! Você será redirecionado em breve.');
        };

        form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert("⚠️ Preencha todos os campos obrigatórios!");
    return;
  }

  // envio pelo EmailJS ou outro serviço
  emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", form)
    .then(() => {
      // grava no localStorage que feedback foi concluído
      localStorage.setItem("feedback.html", "concluido");
      window.location.href = "agradecimento.html";
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
    });

  form.classList.add("was-validated");
});



