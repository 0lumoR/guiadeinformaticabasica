// seguranca.js

const questoesSeguranca = [
  {
    enunciado: "1) Qual é a forma mais segura de criar uma senha?",
    tipo: "unica",
    alternativas: [
      { texto: "Usar o nome do seu cachorro", correta: false },
      { texto: "Combinar letras maiúsculas, minúsculas, números e símbolos", correta: true },
      { texto: "Usar apenas números sequenciais", correta: false },
      { texto: "Reutilizar a mesma senha para todas as contas", correta: false }
    ]
  },
  {
    enunciado: "2) O que significa HTTPS em um site?",
    tipo: "unica",
    alternativas: [
      { texto: "Que o site é antigo", correta: false },
      { texto: "Que o site é gratuito", correta: false },
      { texto: "Que a conexão é criptografada", correta: true },
      { texto: "Que o site não pode ser hackeado", correta: false }
    ]
  },
  {
    enunciado: "3) Qual é a função da autenticação de dois fatores (2FA)?",
    tipo: "unica",
    alternativas: [
      { texto: "Facilitar o login sem senha", correta: false },
      { texto: "Atualizar automaticamente o antivírus", correta: false },
      { texto: "Reduzir a quantidade de senhas armazenadas", correta: false },
      { texto: "Exigir dois tipos de identificação para maior segurança", correta: true }
    ]
  },
  {
    enunciado: "4) Qual prática ajuda a proteger informações ao usar Wi-Fi público?",
    tipo: "unica",
    alternativas: [
      { texto: "Usar uma VPN para criptografar a conexão", correta: true },
      { texto: "Acessar contas bancárias normalmente", correta: false },
      { texto: "Compartilhar senhas com amigos", correta: false },
      { texto: "Desligar o antivírus", correta: false }
    ]
  },
  {
    enunciado: "5) Por que é importante atualizar sistemas operacionais e aplicativos?",
    tipo: "unica",
    alternativas: [
      { texto: "Para ocupar mais espaço no HD", correta: false },
      { texto: "Para corrigir vulnerabilidades e aumentar a segurança", correta: true },
      { texto: "Para deixar o computador mais lento", correta: false },
      { texto: "Para desinstalar aplicativos automaticamente", correta: false }
    ]
  },
  {
    enunciado: "6) Porque é importante fazer logout?",
    tipo: "unica",
    alternativas: [
      { texto: "Salva automaticamente senhas", correta: false },
      { texto: "Encerra a sessão e evita que outras pessoas acessem a conta", correta: true },
      { texto: "Exclui todos os arquivos do computador", correta: false },
      { texto: "Bloqueia o antivírus", correta: false }
    ]
  },
  {
    enunciado: "7) Qual software protege seu computador contra malwares e ransomwares?",
    tipo: "unica",
    alternativas: [
      { texto: "Navegador", correta: false },
      { texto: "Processador", correta: false },
      { texto: "Antivírus", correta: true },
      { texto: "Sistema de arquivos", correta: false }
    ]
  },
  {
    enunciado: "8) Qual é a principal função de um gerenciador de senhas?",
    tipo: "unica",
    alternativas: [
      { texto: "Criar, armazenar e preencher senhas de forma segura", correta: true },
      { texto: "Apagar senhas antigas", correta: false },
      { texto: "Enviar senhas para e-mails", correta: false },
      { texto: "Monitorar histórico de navegação", correta: false }
    ]
  },
  {
    enunciado: "9) Qual medida ajuda a evitar golpes de phishing?",
    tipo: "unica",
    alternativas: [
      { texto: "Clicar em links de remetentes desconhecidos", correta: false },
      { texto: "Compartilhar informações pessoais em redes sociais", correta: false },
      { texto: "Instalar aplicativos de fontes desconhecidas", correta: false },
      { texto: "Desconfiar de links e anexos suspeitos", correta: true }
    ]
  },
  {
    enunciado: "10) Qual dica NÃO contribui para segurança na internet?",
    tipo: "unica",
    alternativas: [
      { texto: "Atualizar dispositivos e softwares", correta: false },
      { texto: "Compartilhar senhas com terceiros", correta: true },
      { texto: "Usar senhas fortes e únicas", correta: false },
      { texto: "Habilitar autenticação de dois fatores", correta: false }
    ]
  },
  {
    enunciado: "11) Analise as afirmações sobre segurança online:",
    tipo: "unica",
    alternativas: [
      { texto: "Apenas I e III estão corretas", correta: false },
      { texto: "I, III e IV estão corretas", correta: true },
      { texto: "Todas estão corretas", correta: false },
      { texto: "Apenas II está correta", correta: false }
    ]
  },
  {
    enunciado: "12) Sobre antivírus e softwares de segurança:",
    tipo: "unica",
    alternativas: [
      { texto: "I, II e IV estão corretas", correta: true },
      { texto: "Apenas III e IV estão corretas", correta: false },
      { texto: "Todas estão corretas", correta: false },
      { texto: "Apenas II e III estão corretas", correta: false }
    ]
  },
  {
    enunciado: "13) Sobre autenticação e senhas:",
    tipo: "unica",
    alternativas: [
      { texto: "Apenas IV está correta", correta: false },
      { texto: "Apenas II está correta", correta: false },
      { texto: "Todas estão corretas", correta: false },
      { texto: "I e III estão corretas", correta: true }
    ]
  },
  {
    enunciado: "14) Sobre redes e conexões:",
    tipo: "unica",
    alternativas: [
      { texto: "Apenas III está correta", correta: false },
      { texto: "I, II e IV estão corretas", correta: true },
      { texto: "Todas estão corretas", correta: false },
      { texto: "Apenas I e III estão corretas", correta: false }
    ]
  },
  {
    enunciado: "15) Sobre comportamento online:",
    tipo: "unica",
    alternativas: [
      { texto: "I e II estão corretas", correta: false },
      { texto: "Apenas II está correta", correta: false },
      { texto: "I, III e IV estão corretas", correta: true },
      { texto: "Todas estão corretas", correta: false }
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