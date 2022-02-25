let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');
let acao = document.querySelector('#submit');
let mensagem = document.querySelector('#message');
let resposta = document.querySelector('#response');
let select = document.querySelector('#selecione');

//mudar botões codificar/decodificar
codificar.onclick = function(){
    acao.innerHTML = "Codificar mensagem";
    decodificar.disabled = true;
}

decodificar.onclick = function(){
    acao.innerHTML = "Decodificar mensagem";
    codificar.disabled = true;
}

//base64:
function codificaMsg (){
    let textoCodifica = message.value;
    let Codeb64 = btoa(textoCodifica);

    if (textoCodifica === " "){
        resposta.innerHTML = `Digite uma mensagem`;
    } else {
        resposta.innerHTML = Codeb64;
    }
    return resposta
}

function decodificaMsg(){
    let textoDecodifica = atob(resposta.value);

    if(textoDecodifica === " "){
        resposta.innerHTML = `Digite uma mensagem codificada`;
    } else {
        resposta.innerHTML = textoDecodifica;
    }
}

function btnCodDecod(event){
    event.preventDefault()

    let checkCod = codificar.checked;
    let checkDecod = decodificar.checked;

    if(select.options[select.selectedIndex].value === "base" && checkCod){
        codificaMsg()
        decodificar.disabled = false;
    } else if (select.options[select.selectedIndex].value === "base" && checkDecod){
        decodificaMsg()
        codificar.disabled = false;
    } else{
        alert (`Insira uma mensagem válida :D`)
    }
}

acao.addEventListener("click", btnCodDecod)


//incremento da cifra
/*let cifra = document.querySelector('#cifra');
let base = document.querySelector('#base')
let incremento = document.querySelector('#incremento');

selecione.addEventListener("change", function(){
    if(selecione.value =="cifra") {
        incremento1.style.display ="block"
    } else {
        incremento1.style.display = "none"
    }
});*/