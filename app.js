var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

function clickhandler(){
    outputdiv.innerText = "translated " + txtInput.value;
};



btnTranslate.addEventListener("click", clickhandler)

btnTranslate