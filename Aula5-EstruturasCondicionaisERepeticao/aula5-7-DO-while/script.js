// DO ...WHILE (Faça enquanto essa condição for verdadeira)
//Estrutura Do{codigo executado pelo menos uma vez} while (condição)

const usuario = {nome: "Daniel", idade: 45, time: "Fluminense"}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!"
const mensagemDeBoasVindas2 = "Bem vindo torcedor rubro-negro!"
const mensagemDeEscolha = "Clique no setor para o quel deseja comprar o seu ingresso"
const mensagemFinal = "Divirta-se no Maracanã"

let numeroDeRepeticoes = 0;

do {
usuario.time === "Fluminense" ? 
console.log(mensagemDeBoasVindas1): 
console.log(mensagemDeBoasVindas2)

console.log(mensagemDeEscolha)
console.log(mensagemFinal)

numeroDeRepeticoes++
} while (numeroDeRepeticoes < 5)
console.log("Ingressos engotados")

