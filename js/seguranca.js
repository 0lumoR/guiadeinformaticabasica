const questoesSeguranca = [
  {
    enunciado: "1) Qual é a forma mais segura de criar uma senha?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Usar o nome do seu cachorro", correta: false },
      { texto: "b) Combinar letras maiúsculas, minúsculas, números e símbolos", correta: true },
      { texto: "c) Usar apenas números sequenciais", correta: false },
      { texto: "d) Reutilizar a mesma senha para todas as contas", correta: false }
    ]
  },
  {
    enunciado: "2) O que significa HTTPS em um site?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Que o site é antigo", correta: false },
      { texto: "b) Que o site é gratuito", correta: false },
      { texto: "c) Que a conexão é criptografada", correta: true },
      { texto: "d) Que o site não pode ser hackeado", correta: false }
    ]
  },
  {
    enunciado: "3) Qual é a função da autenticação de dois fatores (2FA)?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Facilitar o login sem senha", correta: false },
      { texto: "b) Atualizar automaticamente o antivírus", correta: false },
      { texto: "c) Reduzir a quantidade de senhas armazenadas", correta: false },
      { texto: "d) Exigir dois tipos de identificação para maior segurança", correta: true }
    ]
  },
  {
    enunciado: "4) Qual prática ajuda a proteger informações ao usar Wi-Fi público?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Usar uma VPN para criptografar a conexão", correta: true },
      { texto: "b) Acessar contas bancárias normalmente", correta: false },
      { texto: "c) Compartilhar senhas com amigos", correta: false },
      { texto: "d) Desligar o antivírus", correta: false }
    ]
  },
  {
    enunciado: "5) Por que é importante atualizar sistemas operacionais e aplicativos?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Para ocupar mais espaço no HD", correta: false },
      { texto: "b) Para corrigir vulnerabilidades e aumentar a segurança", correta: true },
      { texto: "c) Para deixar o computador mais lento", correta: false },
      { texto: "d) Para desinstalar aplicativos automaticamente", correta: false }
    ]
  },
  {
    enunciado: "6) Por que é importante fazer logout?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Salva automaticamente senhas", correta: false },
      { texto: "b) Encerra a sessão e evita que outras pessoas acessem a conta", correta: true },
      { texto: "c) Exclui todos os arquivos do computador", correta: false },
      { texto: "d) Bloqueia o antivírus", correta: false }
    ]
  },
  {
    enunciado: "7) Qual software protege seu computador contra malwares e ransomwares?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Navegador", correta: false },
      { texto: "b) Processador", correta: false },
      { texto: "c) Antivírus", correta: true },
      { texto: "d) Sistema de arquivos", correta: false }
    ]
  },
  {
    enunciado: "8) Qual é a principal função de um gerenciador de senhas?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Criar, armazenar e preencher senhas de forma segura", correta: true },
      { texto: "b) Apagar senhas antigas", correta: false },
      { texto: "c) Enviar senhas para e-mails", correta: false },
      { texto: "d) Monitorar histórico de navegação", correta: false }
    ]
  },
  {
    enunciado: "9) Qual medida ajuda a evitar golpes de phishing?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Clicar em links de remetentes desconhecidos", correta: false },
      { texto: "b) Compartilhar informações pessoais em redes sociais", correta: false },
      { texto: "c) Instalar aplicativos de fontes desconhecidas", correta: false },
      { texto: "d) Desconfiar de links e anexos suspeitos", correta: true }
    ]
  },
  {
    enunciado: "10) Qual dica NÃO contribui para segurança na internet?",
    tipo: "unica",
    alternativas: [
      { texto: "a) Atualizar dispositivos e softwares", correta: false },
      { texto: "b) Compartilhar senhas com terceiros", correta: true },
      { texto: "c) Usar senhas fortes e únicas", correta: false },
      { texto: "d) Habilitar autenticação de dois fatores", correta: false }
    ]
  },
  {
    enunciado: "11) Analise as afirmações sobre segurança online:<br><br>I – Cada conta deve ter uma senha exclusiva.<br><br>II – Wi-Fi público é sempre seguro para transações bancárias.<br><br>III – Atualizações corrigem vulnerabilidades conhecidas.<br><br>IV – VPNs ajudam a criptografar a conexão em redes públicas.<br><br>Assinale a alternativa correta:<br><br>",
    tipo: "unica",
    alternativas: [
      { texto: "a) Apenas I e III estão corretas", correta: false },
      { texto: "b) I, III e IV estão corretas", correta: true },
      { texto: "c) Todas estão corretas", correta: false },
      { texto: "d) Apenas II está correta", correta: false }
    ]
  },
  {
    enunciado: "12) Sobre antivírus e softwares de segurança:<br><br>I – Antivírus protege contra malwares e ransomwares.<br><br>II – Firewalls ajudam a bloquear acessos não autorizados.<br><br>III – Baixar softwares de fontes desconhecidas aumenta a segurança.<br><br>IV – Atualizações frequentes são importantes para a proteção.<br><br>Assinale a alternativa correta:<br><br>",
    tipo: "unica",
    alternativas: [
      { texto: "a) I, II e IV estão corretas", correta: true },
      { texto: "b) Apenas III e IV estão corretas", correta: false },
      { texto: "c) Todas estão corretas", correta: false },
      { texto: "d) Apenas II e III estão corretas", correta: false }
    ]
  },
  {
    enunciado: "13) Sobre autenticação e senhas:<br><br>I – 2FA adiciona uma camada extra de proteção.<br><br>II – Senhas fracas são seguras se forem longas.<br><br>III – Gerenciadores de senhas podem armazenar senhas de forma segura.<br><br>IV – Reutilizar senhas em várias contas é recomendado.<br><br>Assinale a alternativa correta:<br><br>",
    tipo: "unica",
    alternativas: [
      { texto: "a) Apenas IV está correta", correta: false },
      { texto: "b) Apenas II está correta", correta: false },
      { texto: "c) Todas estão corretas", correta: false },
      { texto: "d) I e III estão corretas", correta: true }
    ]
  },
  {
    enunciado: "14) Sobre redes e conexões:<br><br>I – HTTPS garante comunicação criptografada.<br><br>II – VPNs ajudam a proteger dados em redes públicas.<br><br>III – Conectar-se a qualquer Wi-Fi público é seguro.<br><br>IV – Usar redes públicas exige precaução.<br><br>Assinale a alternativa correta:<br><br>",
    tipo: "unica",
    alternativas: [
      { texto: "a) Apenas III está correta", correta: false },
      { texto: "b) I, II e IV estão corretas", correta: true },
      { texto: "c) Todas estão corretas", correta: false },
      { texto: "d) Apenas I e III estão corretas", correta: false }
    ]
  },
  {
    enunciado: "15) Sobre comportamento online:<br><br>I – Não compartilhar dados pessoais em redes sociais aumenta a segurança.<br><br>II – Clicar em links suspeitos é uma prática segura.<br><br>III – Monitorar vazamentos de e-mail ajuda a proteger identidade digital.<br><br>IV – Educar-se sobre golpes online ajuda a se prevenir.<br><br>Assinale a alternativa correta:<br><br>",
    tipo: "unica",
    alternativas: [
      { texto: "a) I e II estão corretas", correta: false },
      { texto: "b) Apenas II está correta", correta: false },
      { texto: "c) I, III e IV estão corretas", correta: true },
      { texto: "d) Todas estão corretas", correta: false }
    ]
  },
  {
    enunciado: "16) Sobre práticas de segurança na internet, marque as corretas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Usar senhas fortes e únicas", correta: true },
      { texto: "Habilitar autenticação de dois fatores", correta: true },
      { texto: "Compartilhar senhas em redes sociais", correta: false },
      { texto: "Clicar em links suspeitos", correta: false }
    ]
  },
  {
    enunciado: "17) Sobre navegação segura:",
    tipo: "multipla",
    alternativas: [
      { texto: "Ignorar atualizações de software", correta: false },
      { texto: "Utilizar conexões HTTPS", correta: true },
      { texto: "Evitar redes Wi-Fi públicas sem VPN", correta: true },
      { texto: "Baixar aplicativos de fontes não confiáveis", correta: false }
    ]
  },
  {
    enunciado: "18) Sobre antivírus e proteção digital:",
    tipo: "multipla",
    alternativas: [
      { texto: "Manter antivírus atualizado", correta: true },
      { texto: "Ignorar alertas de segurança", correta: false },
      { texto: "Permitir extensões suspeitas em navegadores", correta: false },
      { texto: "Usar firewalls para bloquear acessos não autorizados", correta: true }
    ]
  },
  {
    enunciado: "19) Sobre gerenciamento de contas:",
    tipo: "multipla",
    alternativas: [
      { texto: "Fazer logout em dispositivos compartilhados", correta: true },
      { texto: "Reutilizar senhas em várias contas", correta: false },
      { texto: "Usar gerenciador de senhas", correta: true },
      { texto: "Informar senhas a terceiros para facilidade", correta: false }
    ]
  },
  {
    enunciado: "20) Sobre comportamento preventivo online:",
    tipo: "multipla",
    alternativas: [
      { texto: "Ignorar mensagens suspeitas de serviços legítimos", correta: false },
      { texto: "Divulgar informações pessoais em redes sociais", correta: false },
      { texto: "Monitorar possíveis vazamentos de e-mails ou senhas", correta: true },
      { texto: "Educar-se sobre golpes online e phishing", correta: true }
    ]
  }
];

renderizarQuestoes(questoesSeguranca)