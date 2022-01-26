let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');
let action = document.querySelector('button');

codificar.onclick = function(){
    action.innerHTML = "Codificar mensagem";
    decodificar.disabled = true;
}

decodificar.onclick = function(){
    action.innerHTML = "Decodificar mensagem";
    codificar.disabled = true;
}


let selecione = document.querySelector('#selecione');
let cifra = document.querySelector('#cifra');
let base = document.querySelector('#base')
let incremento = document.querySelector('#incremento');

selecione.addEventListener("change", function(){
    if(selecione.value =="cifra") {
        incremento.style.display ="block"
    } else {
        incremento.style.display = "none"
    }
})