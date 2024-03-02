//EXEMPLO 1

const usuario = {nome: "Daniel", idade: 45, time: "nenhum"}
const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!"
const mensagemDeBoasVindas2 = "Bem vindo torcedor rubro-negro!"
const mensagemDeBoasVindas3 = "Bem vindo torcedor!"

if(usuario.time === "Fluminense"){
    console.log(mensagemDeBoasVindas1)
} if(usuario.time === "Flamengo"){
console.log(mensagemDeBoasVindas2)
} else {
console.log(mensagemDeBoasVindas3)
}

const mensagemDeEscolha = "Clique no setor para o quel deseja comprar o seu ingresso"
const mensagemFinal = "Divirta-se no Maracanã"

console.log(mensagemDeEscolha)
console.log(mensagemFinal)

// EXEMPLO 2

const passageiro = {nome: "Daniel", nacionalidade: "mexicano", idade: 65}


if(passageiro.nacionalidade === "brasileiro"){
    console.log(`Olá senhor ${passageiro.nome}. Por favor, dirija-se ao guichê da alfândega nacional.`)
    } else{
    console.log (`Hello Mr. ${passageiro.nome}. Ïf you are a foregner, please, wait on the line with your passport. Welcome to Brazil`)
}