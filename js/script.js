/*const tituloPrincipal = document.getElementById('tituloPrincipal')
var nome = 'Gustavo';
tituloPrincipal.textContent = `Seja Bem Vindo ${nome} ` ;
*/

//const tituloPrincipal = document.querySelector('#tituloPrincipal');
//const divDOM = document.querySelectorAll('div.content');

//tituloPrincipal.textContent = 'teste <a href = ""> Ola</a>';
//tituloPrincipal.textContent = 'teste';

// Manipular DOM no HTML
//tituloPrincipal.innerHTML = 'teste <a href = ""> Ola</a>';

//Manipulação CSSOM no css
//divDOM[0].style.backgroundColor = 'black';


function tabuada() {
    const valor = document.querySelector('#tabuada').value;
    const divResposta = document.querySelector('#respostaTabuada');

    divResposta.innerHTML = '';

    if (valor != '') {

        for (let i = 1; i <= 10; i++) {

            divResposta.innerHTML += ` ${valor} x ${i} = ${valor * i} <br>`;

        } 
    } else {
        divResposta.textContent = 'Insere um valor zé ruela!'
    }

}



function alterarCor() {
    //Entrada
    const cor = document.querySelector('#cor').value;
    const body = document.querySelector('body');

    //saída
    body.style.backgroundColor = `${cor}`;


}



/*
for(let i of tituloPrincipal){
tituloPrincipal[i].textContent = 'Teste';
}*/