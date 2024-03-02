// Estrutura: (condição boleana) ? console.log("mensagem da execução") : console.log (mensagem contrária")

const usuario = {nome: "Daniel", idade: 45, time: "Flamengo"}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!"
const mensagemDeBoasVindas2 = "Bem vindo torcedor rubro-negro!"

usuario.time === "Fluminense" ? console.log(mensagemDeBoasVindas1): console.log(mensagemDeBoasVindas2)

const mensagemDeEscolha = "Clique no setor para o quel deseja comprar o seu ingresso"
const mensagemFinal = "Divirta-se no Maracanã"

console.log(mensagemDeEscolha)
console.log(mensagemFinal)
