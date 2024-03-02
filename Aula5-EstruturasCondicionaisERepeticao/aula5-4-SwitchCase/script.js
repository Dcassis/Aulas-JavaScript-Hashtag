const usuario = {nome: "Daniel", idade: 45, time: 'Sergipe'}
const mensagemDeBoasVindas1 = "Bem vindo, torcedor tricolor!"
const mensagemDeBoasVindas2 = "Bem vindo, torcedor rubro-negro!"
const mensagemDeBoasVindas3 = "Bem vindo, torcedor vascaíno!"
const mensagemDeBoasVindas4 = "Bem vindo, torcedor botafoguense!"
const mensagemDeBoasVindas5 = "Bem vindo, amante do futebol!"

const mensagemDeEscolha = "Clique no setor para o quel deseja comprar o seu ingresso"
const mensagemFinal = "Divirta-se no Maracanã"

switch (usuario.time) {
    case 'Fluminense':
        console.log(mensagemDeBoasVindas1)        
        break
    case 'Flamengo':
        console.log(mensagemDeBoasVindas2)
        break
    case 'Vasco':
        console.log(mensagemDeBoasVindas3)
        break
    case 'Botafogo':
        console.log(mensagemDeBoasVindas4)
        break
    default:
        console.log(mensagemDeBoasVindas5)
    }

    console.log(mensagemDeEscolha)
    console.log(mensagemFinal)