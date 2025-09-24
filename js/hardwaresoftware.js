// hardwareSoftware.js

const questoesHardwareSoftware = [
  {
    enunciado: "1) Qual componente é considerado o “cérebro” do computador?",
    tipo: "unica",
    alternativas: [
      { texto: "Placa-mãe", correta: false },
      { texto: "CPU (Processador)", correta: true },
      { texto: "Memória RAM", correta: false },
      { texto: "HD", correta: false }
    ]
  },
  {
    enunciado: "2) Qual tipo de memória é volátil e armazena dados temporários enquanto o computador está em funcionamento?",
    tipo: "unica",
    alternativas: [
      { texto: "HD", correta: false },
      { texto: "SSD", correta: false },
      { texto: "RAM", correta: true },
      { texto: "GPU", correta: false }
    ]
  },
  {
    enunciado: "3) Qual tipo de armazenamento utiliza discos magnéticos giratórios?",
    tipo: "unica",
    alternativas: [
      { texto: "SSD M.2 NVMe", correta: false },
      { texto: "HD", correta: true },
      { texto: "SSD SATA", correta: false },
      { texto: "RAM", correta: false }
    ]
  },
  {
    enunciado: "4) O que é um software de sistema?",
    tipo: "unica",
    alternativas: [
      { texto: "Um programa que cria jogos e aplicativos", correta: false },
      { texto: "Um dispositivo físico do computador", correta: false },
      { texto: "Um programa específico para edição de imagens", correta: false },
      { texto: "Um conjunto de programas que gerencia o hardware e fornece base para outros softwares", correta: true }
    ]
  },
  {
    enunciado: "5) Qual componente fornece energia elétrica para todos os outros dispositivos do computador?",
    tipo: "unica",
    alternativas: [
      { texto: "GPU", correta: false },
      { texto: "CPU", correta: false },
      { texto: "Fonte de alimentação", correta: true },
      { texto: "Cooler", correta: false }
    ]
  },
  {
    enunciado: "6) Qual tipo de software permite ao usuário criar novos programas e aplicativos?",
    tipo: "unica",
    alternativas: [
      { texto: "Software de programação", correta: true },
      { texto: "Software aplicativo", correta: false },
      { texto: "Software de sistema", correta: false },
      { texto: "Drivers", correta: false }
    ]
  },
  {
    enunciado: "7) Qual componente é responsável por gerar, processar e renderizar imagens e gráficos?",
    tipo: "unica",
    alternativas: [
      { texto: "CPU", correta: false },
      { texto: "GPU (Placa de vídeo)", correta: true },
      { texto: "RAM", correta: false },
      { texto: "Cooler", correta: false }
    ]
  },
  {
    enunciado: "8) Qual tipo de software gerencia o hardware do computador e fornece base para a execução de outros programas?",
    tipo: "unica",
    alternativas: [
      { texto: "Jogos", correta: false },
      { texto: "Software aplicativo", correta: false },
      { texto: "Software de programação", correta: false },
      { texto: "Software de sistema", correta: true }
    ]
  },
  {
    enunciado: "9) Qual das alternativas abaixo é um exemplo de software aplicativo?",
    tipo: "unica",
    alternativas: [
      { texto: "Windows", correta: false },
      { texto: "Driver de impressora", correta: false },
      { texto: "Microsoft Word", correta: true },
      { texto: "Compilador de programação", correta: false }
    ]
  },
  {
    enunciado: `10) Analise as afirmações:<br><br>
I – A memória RAM armazena dados temporariamente enquanto o computador está em funcionamento.<br><br>
II – A CPU processa instruções e coordena todos os componentes do computador.<br><br>
III – O HD armazena dados de forma permanente, mesmo quando o computador está desligado.<br><br>
IV – O monitor é um dispositivo de entrada.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "Apenas I e II estão corretas.", correta: false },
      { texto: "I, II e III estão corretas.", correta: true },
      { texto: "Apenas IV está correta.", correta: false },
      { texto: "Todas estão corretas.", correta: false }
    ]
  },
  {
    enunciado: "11) Sobre o armazenamento de dados, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "HD utiliza discos magnéticos giratórios.", correta: true },
      { texto: "SSD M.2 NVMe oferece maior velocidade de leitura e gravação que SSD SATA.", correta: true },
      { texto: "RAM armazena dados permanentemente mesmo sem energia.", correta: false },
      { texto: "Coolers armazenam dados do sistema operacional.", correta: false }
    ]
  },
  {
    enunciado: `12) Analise as afirmações sobre a placa-mãe:<br><br>
I – É a base central do computador onde todos os componentes se conectam.<br><br>
II – Distribui energia elétrica proveniente da fonte para cada componente.<br><br>
III – Possui memória própria como a RAM.<br><br>
IV – Conecta dispositivos de armazenamento e periféricos.<br><br>
Assinale a alternativa correta:<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "I, II e IV estão corretas.", correta: true },
      { texto: "Apenas I e II estão corretas.", correta: false },
      { texto: "Apenas III está correta.", correta: false },
      { texto: "Todas estão corretas.", correta: false }
    ]
  },
  {
    enunciado: `13) Sobre dispositivos de entrada e saída, assinale a alternativa correta:<br><br>
I – O teclado permite inserir dados no computador.<br><br>
II – O mouse é um dispositivo de saída.<br><br>
III – O monitor exibe informações processadas.<br><br>`,
    tipo: "unica",
    alternativas: [
      { texto: "Apenas II está correta.", correta: false },
      { texto: "Apenas I está correta.", correta: false },
      { texto: "I e III estão corretas.", correta: true },
      { texto: "Todas estão corretas.", correta: false }
    ]
  },
  {
    enunciado: "14) Sobre o software, marque as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "O sistema operacional gerencia o hardware e fornece base para outros softwares.", correta: true },
      { texto: "Software aplicativo permite criar novos programas.", correta: false },
      { texto: "Drivers possibilitam que o sistema operacional se comunique com hardware.", correta: true },
      { texto: "Compiladores são exemplos de software de programação.", correta: true }
    ]
  },
  {
    enunciado: "15) Sobre os componentes de hardware, assinale as afirmativas corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "A placa-mãe conecta todos os componentes do computador e distribui energia.", correta: true },
      { texto: "A GPU é responsável pelo processamento gráfico e renderização de imagens.", correta: true },
      { texto: "O monitor é um dispositivo de entrada que armazena dados.", correta: false },
      { texto: "A fonte de alimentação processa dados e cálculos lógicos do sistema.", correta: false }
    ]
  }
];
renderizarQuestoes(questoesHardwareSoftware)