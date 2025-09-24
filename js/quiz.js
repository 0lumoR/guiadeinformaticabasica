function renderizarQuestoes(listaQuestoes) {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // limpar antes de carregar

  listaQuestoes.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("mb-4");

    let html = `<p><strong>${q.enunciado}</strong></p>`;

    q.alternativas.forEach((alt, i) => {
      // se for multipla escolha usa checkbox, senão radio
      const inputType = q.tipo === "multipla" ? "checkbox" : "radio";

      html += `
        <div class="form-check">
          <input type="${inputType}" 
                 name="questao${index}" 
                 id="q${index}a${i}" 
                 class="form-check-input" 
                 value="${alt.correta}">
          <label for="q${index}a${i}" class="form-check-label">
            ${alt.texto}
          </label>
        </div>
      `;
    });

    div.innerHTML = html;
    quizContainer.appendChild(div);
  });

  // botão de verificação
  const botao = document.getElementById("verificar");
  botao.onclick = () => verificarRespostas(listaQuestoes);
}

function verificarRespostas(listaQuestoes) {
  let corretas = 0;

  listaQuestoes.forEach((q, index) => {
    const respostas = document.querySelectorAll(`input[name="questao${index}"]:checked`);
    const respostasCorretas = q.alternativas.filter(a => a.correta).length;

    let pontos = 0;
    respostas.forEach(r => {
      if (r.value === "true") pontos++;
      else pontos--; // penaliza se marcar errado
    });

    if (pontos === respostasCorretas) {
      corretas++;
    }
  });

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // limpar tudo para mostrar resultado

  const resultado = document.createElement("div");
  resultado.classList.add("alert", "mt-4");

  if (corretas === listaQuestoes.length) {
    resultado.classList.add("alert-success");
    resultado.innerHTML = `<h4>🎉 Parabéns!</h4><p>Você acertou todas as ${corretas} de ${listaQuestoes.length} questões!</p>`;
  } else {
    resultado.classList.add("alert-warning");
    resultado.innerHTML = `
      <h4>Você acertou ${corretas} de ${listaQuestoes.length} questões.</h4>
      <p>Tente novamente para melhorar sua pontuação!</p>
      <button id="tentarNovamente" class="btn btn-primary mt-3">🔄 Tentar novamente</button>
    `;
  }

  quizContainer.appendChild(resultado);

  // botão de tentar novamente
  const btnRetry = document.getElementById("tentarNovamente");
  if (btnRetry) {
    btnRetry.onclick = () => renderizarQuestoes(listaQuestoes);
  }
}

