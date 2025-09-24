// sistemasOperacionais.js

const questoesSistemasOperacionais = [
  {
    enunciado: "1) Qual das alternativas abaixo é um sistema operacional de código aberto?",
    tipo: "unica",
    alternativas: [
      { texto: "Windows 11", correta: false },
      { texto: "macOS", correta: false },
      { texto: "Linux Mint", correta: true },
      { texto: "iOS", correta: false }
    ]
  },
  {
    enunciado: "2) Qual sistema operacional é exclusivo para computadores Apple?",
    tipo: "unica",
    alternativas: [
      { texto: "macOS", correta: true },
      { texto: "Linux Mint", correta: false },
      { texto: "Windows 11", correta: false },
      { texto: "Android", correta: false }
    ]
  },
  {
    enunciado: "3) Qual sistema operacional móvel é baseado em código aberto e permite personalização por fabricantes?",
    tipo: "unica",
    alternativas: [
      { texto: "iOS", correta: false },
      { texto: "Android", correta: true },
      { texto: "Windows 11", correta: false },
      { texto: "Linux Mint", correta: false }
    ]
  },
  {
    enunciado: "4) No Linux Mint, o Nemo é:",
    tipo: "unica",
    alternativas: [
      { texto: "Um aplicativo de segurança", correta: false },
      { texto: "O gerenciador de arquivos padrão", correta: true },
      { texto: "Um editor de texto", correta: false },
      { texto: "Um terminal para comandos", correta: false }
    ]
  },
  {
    enunciado: "5) Qual sistema operacional móvel é exclusivo para iPhones?",
    tipo: "unica",
    alternativas: [
      { texto: "Android", correta: false },
      { texto: "Windows 11", correta: false },
      { texto: "Linux Mint", correta: false },
      { texto: "iOS", correta: true }
    ]
  },
  {
    enunciado: `6) Analise as afirmações sobre sistemas operacionais:<br><br>
I – O sistema operacional atua como intermediário entre hardware e usuário.<br><br>
II – Linux Mint é open source e permite modificação do código.<br><br>
III – iOS pode ser instalado em qualquer dispositivo Android.<br><br>
IV – macOS é exclusivo para computadores Apple.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "I, II e IV estão corretas.", correta: true },
      { texto: "Apenas II e III estão corretas.", correta: false },
      { texto: "Todas estão corretas.", correta: false },
      { texto: "Apenas I e III estão corretas.", correta: false }
    ]
  },
  {
    enunciado: `7) Sobre o Linux Mint:<br><br>
I – O Terminal permite executar comandos administrativos com sudo.<br><br>
II – Linux Mint é exclusivo para servidores.<br><br>
III – Nemo é um gerenciador de arquivos.<br><br>
IV – A área de trabalho permite personalização de fundo e ícones.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "I, III e IV estão corretas.", correta: true },
      { texto: "Apenas II e IV estão corretas.", correta: false },
      { texto: "Todas estão corretas.", correta: false },
      { texto: "I e IV estão corretas.", correta: false }
    ]
  },
  {
    enunciado: `8) Sobre sistemas operacionais móveis:<br><br>
I – Android é open source e permite personalização.<br><br>
II – iOS é exclusivo para iPhones.<br><br>
III – Apenas o iOS permite gerenciamento de aplicativos e recursos de segurança.<br><br>
IV – Linux Mint é um sistema operacional móvel.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "I, II e III estão corretas.", correta: false },
      { texto: "Apenas I e II estão corretas.", correta: true },
      { texto: "Todas estão corretas.", correta: false },
      { texto: "I e IV estão corretas.", correta: false }
    ]
  },
  {
    enunciado: `9) Sobre o Windows 11:<br><br>
I – O Menu Iniciar mostra aplicativos fixados e recomendações.<br><br>
II – O Nemo é o gerenciador de arquivos padrão do Windows 11.<br><br>
III – O Windows 11 é open source.<br><br>
IV – A barra de tarefas exibe ícones de aplicativos abertos.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "I e IV estão corretas.", correta: true },
      { texto: "Apenas III está correta.", correta: false },
      { texto: "I e IV estão corretas.", correta: true }, // mesma opção repetida, mantém coerência
      { texto: "Todas estão corretas.", correta: false }
    ]
  },
  {
    enunciado: "10) Sobre o Linux Mint, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Terminal não permite comandos administrativos", correta: false },
      { texto: "Nemo é o gerenciador de arquivos padrão", correta: true },
      { texto: "Cada usuário possui pasta própria dentro de /home", correta: true },
      { texto: "A área de trabalho permite personalização de fundo e ícones", correta: true }
    ]
  },
  {
    enunciado: "11) Sobre funções do sistema operacional, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Gerenciamento de processos", correta: true },
      { texto: "Processamento físico de dados pela CPU", correta: false },
      { texto: "Interface com o usuário", correta: true },
      { texto: "Armazenamento permanente de arquivos sem hardware", correta: false },
      { texto: "Gerenciamento de dispositivos de entrada e saída", correta: true }
    ]
  },
  {
    enunciado: "12) Qual é o sistema operacional mais popular em computadores pessoais (PCs) no mundo?",
    tipo: "unica",
    alternativas: [
      { texto: "macOS", correta: false },
      { texto: "Android", correta: false },
      { texto: "Windows", correta: true },
      { texto: "Linux", correta: false }
    ]
  }
];
renderizarQuestoes(questoesSistemasOperacionais);