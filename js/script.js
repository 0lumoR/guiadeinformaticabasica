document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-secondary");
  botoes.forEach(botao => {
    const id = botao.href; // identificador único
    if(localStorage.getItem(id) === "concluido") {
      botao.classList.add("modulo-concluido");
      botao.innerText += " ✅";
      botao.disabled = true;
    }
  });
});

function marcarComoLido(botao) {
  botao.classList.add("modulo-concluido");
  botao.innerText += " ✅";
  botao.disabled = true;
  localStorage.setItem(botao.href, "concluido");
}



