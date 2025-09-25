const questoesNavegadores = [
  {
    enunciado: "1) Qual é o navegador mais utilizado no mundo?",
    tipo: "unica",
    alternativas: [
      { texto: "Google Chrome", correta: true },
      { texto: "Opera", correta: false },
      { texto: "Mozilla Firefox", correta: false },
      { texto: "Safari", correta: false }
    ]
  },
  {
    enunciado: "2) Qual navegador é exclusivo para dispositivos Apple?",
    tipo: "unica",
    alternativas: [
      { texto: "Chrome", correta: false },
      { texto: "Safari", correta: true },
      { texto: "Edge", correta: false },
      { texto: "Firefox", correta: false }
    ]
  },
  {
    enunciado: "3) Qual navegador utiliza o motor Chromium e é desenvolvido pela Microsoft?",
    tipo: "unica",
    alternativas: [
      { texto: "Opera", correta: false },
      { texto: "Firefox", correta: false },
      { texto: "Chrome", correta: false },
      { texto: "Edge", correta: true }
    ]
  },
  {
    enunciado: "4) Qual navegador possui bloqueador de anúncios embutido e VPN gratuita?",
    tipo: "unica",
    alternativas: [
      { texto: "Chrome", correta: false },
      { texto: "Safari", correta: false },
      { texto: "Opera", correta: true },
      { texto: "Edge", correta: false }
    ]
  },
  {
    enunciado: "5) O que é a barra de endereços de um navegador?",
    tipo: "unica",
    alternativas: [
      { texto: "Área que mostra guias abertas", correta: false },
      { texto: "Local onde digitamos URLs ou fazemos pesquisas", correta: true },
      { texto: "Botão para recarregar a página", correta: false },
      { texto: "Menu de favoritos", correta: false }
    ]
  },
  {
    enunciado: "6) As guias ou abas de um navegador servem para:",
    tipo: "unica",
    alternativas: [
      { texto: "Abrir várias páginas simultaneamente", correta: true },
      { texto: "Acessar apenas um site por vez", correta: false },
      { texto: "Gerenciar favoritos", correta: false },
      { texto: "Atualizar conteúdo da página", correta: false }
    ]
  },
  {
    enunciado: "7) O botão “recarregar” ou “atualizar” serve para:",
    tipo: "unica",
    alternativas: [
      { texto: "Salvar favoritos", correta: false },
      { texto: "Abrir novas abas", correta: false },
      { texto: "Fechar o navegador", correta: false },
      { texto: "Atualizar o conteúdo da página", correta: true }
    ]
  },
  {
    enunciado: "8) Qual navegador é conhecido pelo foco em privacidade e personalização?",
    tipo: "unica",
    alternativas: [
      { texto: "Edge", correta: false },
      { texto: "Chrome", correta: false },
      { texto: "Firefox", correta: true },
      { texto: "Opera", correta: false }
    ]
  },
  {
    enunciado: "9) O botão de favoritos/Marcadores serve para:",
    tipo: "unica",
    alternativas: [
      { texto: "Salvar sites importantes para acesso rápido", correta: true },
      { texto: "Recarregar a página", correta: false },
      { texto: "Abrir o terminal", correta: false },
      { texto: "Gerenciar histórico do sistema", correta: false }
    ]
  },
  {
    enunciado: "10) Qual navegador tem integração avançada com serviços de nuvem da Microsoft?",
    tipo: "unica",
    alternativas: [
      { texto: "Firefox", correta: false },
      { texto: "Chrome", correta: false },
      { texto: "Edge", correta: true },
      { texto: "Safari", correta: false }
    ]
  },
  {
    enunciado: "11) Sobre funções de um navegador, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Permite abrir múltiplas páginas simultaneamente com abas", correta: true },
      { texto: "Armazena permanentemente dados do computador", correta: false },
      { texto: "Executa diretamente programas instalados no sistema operacional", correta: false },
      { texto: "Permite digitar URLs e realizar pesquisas na internet", correta: true }
    ]
  },
  {
    enunciado: "12) Sobre navegadores, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Google Chrome é o navegador mais usado no mundo", correta: true },
      { texto: "Safari é exclusivo para dispositivos Apple", correta: true },
      { texto: "Edge é exclusivo para Linux", correta: false },
      { texto: "Opera não possui recursos adicionais como VPN", correta: false }
    ]
  },
  {
    enunciado: "13) Sobre botões de navegação, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Voltar e avançar permitem navegar entre páginas visitadas", correta: true },
      { texto: "Botão de favoritos serve para atualizar páginas", correta: false },
      { texto: "Recarregar atualiza o conteúdo da página", correta: true },
      { texto: "Menu de opções não oferece configurações de privacidade", correta: false }
    ]
  },
  {
    enunciado: "14) Sobre menu de opções de um navegador, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Permite gerenciar histórico e favoritos", correta: true },
      { texto: "Permite instalar extensões e ajustar aparência", correta: true },
      { texto: "É usado para desligar o computador", correta: false },
      { texto: "Não permite alterar configurações de segurança", correta: false }
    ]
  },
  {
    enunciado: "15) Sobre Mozilla Firefox, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "É exclusivo para Windows", correta: false },
      { texto: "Foca em privacidade e personalização", correta: true },
      { texto: "Permite instalar extensões para melhorar a navegação", correta: true },
      { texto: "Não pode ser usado em smartphones", correta: false }
    ]
  }
];
renderizarQuestoes(questoesNavegadores)