const usuario = {nome: "DAniel", idade: 45, time: "Fluminense", tratamento:"você"}
const mensagemDeBoasVindas1 = "Bem vindo, torcedor tricolor!"
const mensagemDeBoasVindas2 = "Bem vindo, torcedor rubro-negro!"
const mensagemDeBoasVindas3 = "Bem vindo, torcedor vascaíno!"
const mensagemDeBoasVindas4 = "Bem vindo, torcedor botafoguense!"
const mensagemDeBoasVindas5 = "Bem vindo, amante do futebol!"

if(usuario.time === "Fluminense"){
    console.log(mensagemDeBoasVindas1)
} else if(usuario.time === "Flamengo"){
console.log(mensagemDeBoasVindas2)
} else if(usuario.time === "Vasco"){
console.log(mensagemDeBoasVindas3)
} else if(usuario.time ==="Botafogo"){
    console.log(mensagemDeBoasVindas4)
} else{
    console.log(mensagemDeBoasVindas5)
}


if(usuario.idade>=65){
    console.log(`${usuario.nome}, ${usuario.tratamento} é maior de 65 anos, tem direito a desconto e a prioridade para compra do ingresso, por gentileza, dirija-se a fila especial`)
}

const mensagemDeEscolha = "Clique no setor para o quel deseja comprar o seu ingresso"
const mensagemFinal = "Divirta-se no Maracanã"

console.log(mensagemDeEscolha)
console.log(mensagemFinal)