function mudarCor(elemento, espace, line){
    elemento.style.letterSpacing = espace;
    elemento.style.textDecoration = line;
}

function alertar(){
    alert('Botão clicado!')
}

function focar(elemento){
    elemento.value = 'Campo em Foco!'
}

function desfocar(elemento){
    elemento.value = ""

}

function figura(elemento){
    elemento.src = 'imagem2.png'
}
function figura2(elemento){
    elemento.src = 'imagem1.png'
}