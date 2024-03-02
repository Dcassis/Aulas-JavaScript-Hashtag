const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pela tag h2:" ,titulo);

const paragrafo = document.getElementsByClassName("texto-lista");
console.log("Selecionado pelo nome da classe:" ,paragrafo);

const destacado = document.getElementById("destacado");
console.log("Selecionado pelo nome da Id:" ,destacado);

const destacadoSelector = document.querySelector('#destacado');
console.log("Selecionado Id por seletor css:" ,destacadoSelector);

const todosPitens = document.querySelectorAll('.texto-lista');
console.log("Selecionado multiplos elementos por seletor css:" ,todosPitens);

const inputName = document.getElementsByName("username");
console.log("Selecionado elementos pelo nome:" ,inputName);

const todosElementos = document.querySelectorAll('*');
console.log("Selecionado todos elementos por seletor css:" ,todosElementos);