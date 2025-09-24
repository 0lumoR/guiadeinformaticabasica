// introducao.js

const questoesIntroducao = [
  {
    enunciado: "1) Sobre hardware e software, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Hardware é a parte física do computador, como CPU, memória, monitor e teclado.", correta: true },
      { texto: "O hardware inclui navegadores e editores de texto, pois são programas instalados.", correta: false },
      { texto: "Software é o conjunto de instruções e programas que fazem o computador funcionar.", correta: true }
    ]
  },
  {
    enunciado: "2) Sobre o funcionamento de um computador, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "O processamento dos dados é feito pela CPU.", correta: true },
      { texto: "Dispositivos como teclado e mouse são responsáveis pela entrada de dados.", correta: true },
      { texto: "A saída de dados ocorre somente por meio de impressoras.", correta: false }
    ]
  },
  {
    enunciado: "3) Sobre os tipos de computadores, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Servidores armazenam e distribuem informações para outros computadores.", correta: true },
      { texto: "Notebooks são computadores de difícil transporte.", correta: false },
      { texto: "Tablets são computadores móveis com tela sensível ao toque.", correta: true },
      { texto: "Desktops precisam estar conectados o tempo todo à energia elétrica para funcionar.", correta: true }
    ]
  },
  {
    enunciado: "4) Qual das opções representa corretamente o conceito de computador?",
    tipo: "unica",
    alternativas: [
      { texto: "Um equipamento usado apenas para jogar e assistir vídeos.", correta: false },
      { texto: "Um aparelho destinado exclusivamente à saída de informações.", correta: false },
      { texto: "Uma máquina eletrônica capaz de receber, processar e armazenar dados.", correta: true },
      { texto: "Um dispositivo formado apenas por programas e aplicativos.", correta: false },
      
    ]
  },
  {
    enunciado: "5) A função do armazenamento em um computador é:",
    tipo: "unica",
    alternativas: [
      { texto: "Processar dados em tempo real.", correta: false },
      { texto: "Guardar informações para uso posterior.", correta: true },
      { texto: "Enviar dados diretamente para a CPU.", correta: false },
      { texto: "Controlar a entrada de dados do teclado.", correta: false }
    ]
  },
  {
    enunciado: "6) Qual dos itens a seguir não faz parte do hardware de um computador?",
    tipo: "unica",
    alternativas: [
      { texto: "Processador (CPU)", correta: false },
      { texto: "Memória RAM", correta: false },
      { texto: "Monitor", correta: false },
      { texto: "Sistema operacional", correta: true }
    ]
  },
  {
    enunciado: "7) Qual é a principal função de um servidor?",
    tipo: "unica",
    alternativas: [
      { texto: "Fornecer conexão Wi-Fi para smartphones.", correta: false },
      { texto: "Armazenar e distribuir informações para outros computadores.", correta: true },
      { texto: "Substituir o sistema operacional de notebooks.", correta: false },
      { texto: "Executar apenas sistemas embarcados.", correta: false }
    ]
  },
  {
    enunciado: "8) Assinale a opção que representa um sistema embarcado:",
    tipo: "unica",
    alternativas: [
      { texto: "Geladeira com painel digital", correta: true },
      { texto: "Servidor de rede", correta: false },
      { texto: "Desktop", correta: false },
      { texto: "Notebook", correta: false }
    ]
  },
  {
  enunciado: "9) Analise as afirmações:<br><br>I – O usuário fornece dados e comandos ao computador por meio de dispositivos de entrada.<br><br>II – A CPU é responsável por processar os dados, realizando cálculos e lógicas de acordo com o software.<br><br>III – O computador apresenta o resultado do processamento por meio de dispositivos de saída, como monitor, alto-falantes ou impressora.<br><br>IV – As informações processadas podem ser armazenadas para uso posterior.<br><br>Assinale a alternativa correta:<br><br>",
  tipo: "unica",
  alternativas: [
    { texto: "Apenas I e II estão corretas.", correta: false },
    { texto: "Apenas IV está correta.", correta: false },
    { texto: "I, II e III estão corretas.", correta: false },
    { texto: "Todas estão corretas.", correta: true }
  ]
},
  {
    enunciado: "10) Qual das alternativas representa um exemplo de software mencionado no texto?",
    tipo: "unica",
    alternativas: [
      { texto: "Teclado", correta: false },
      { texto: "CPU", correta: false },
      { texto: "Navegador de internet", correta: true },
      { texto: "Monitor", correta: false }
    ]
  },
  {
    enunciado: "11) Sobre Alan Turing, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "É conhecido como o pai da Ciência da Computação.", correta: true },
      { texto: "Criou a primeira calculadora mecânica.", correta: false },
      { texto: "Desenvolveu o ENIAC.", correta: false },
      { texto: "Formalizou o conceito de máquina universal, estabelecendo os princípios teóricos da computação moderna.", correta: true }
    ]
  },
  {
    enunciado: "12) Sobre Charles Babbage e Blaise Pascal, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Blaise Pascal criou a primeira calculadora mecânica.", correta: true },
      { texto: "Charles Babbage desenvolveu a Álgebra Booleana.", correta: false },
      { texto: "Charles Babbage projetou a Máquina Analítica, considerada o primeiro conceito de computador programável.", correta: true },
      { texto: "Blaise Pascal formalizou o conceito de máquina universal.", correta: false }
    ]
  },
  {
    enunciado: "13) George Boole é importante na computação porque:",
    tipo: "unica",
    alternativas: [
      { texto: "Criou a primeira calculadora mecânica", correta: false },
      { texto: "Desenvolveu a Álgebra Booleana, essencial para a lógica de computadores", correta: true },
      { texto: "Inventou o ENIAC", correta: false },
      { texto: "Projetou sistemas embarcados", correta: false }
    ]
  },
  {
    enunciado: "14) Charles Babbage ficou conhecido por:",
    tipo: "unica",
    alternativas: [
      { texto: "Projetar a Máquina Analítica, considerado o primeiro conceito de computador programável", correta: true },
      { texto: "Criar a primeira calculadora mecânica", correta: false },
      { texto: "Desenvolver a Álgebra Booleana", correta: false },
      { texto: "Construir o ENIAC", correta: false }
    ]
  }
];


renderizarQuestoes(questoesIntroducao);
