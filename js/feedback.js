// feedback.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert("⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.");
    } else {
      alert("✅ Obrigado pela sua avaliação!");
    }

    form.classList.add("was-validated");
  });
});
