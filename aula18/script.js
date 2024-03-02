function criarElementoInnerText(){
    const ul = document.getElementById("lista-de-elementos");

    const novaLi = document.createElement("li")
    novaLi.innerText = "Novo input com InnerText "
      
    const novoInput = document.createElement("input");
    
    novaLi.appendChild(novoInput);
    ul.appendChild(novaLi);
}

function criarElementoInnerHtml() {
    const ul = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");

    console.log("Adicionando novo elemento ao clicar");

    //novaLi.innerHTML = "<p>Sintaxe para a criação de um parágrafo com conteúdo/>
    novaLi.innerHTML = '<input type="text" />';
    ul.appendChild(novaLi);
}

function criarElementoTextContent() {
    const ul = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    const novoInput = document.createElement("input")

    console.log("Adicionando novo elemento ao clicar");

    novaLi.textContent = "Atribuindo conteúdo TextContent ";
    novaLi.appendChild(novoInput)
    ul.appendChild(novaLi);
}

//innertex - manipula texto (leva em consideração o estilo css para exibir texto. Não mostra elementos ocultos)
// textContent - manipula apenas texto
//innerHtml - manipula conteúdo html e texto