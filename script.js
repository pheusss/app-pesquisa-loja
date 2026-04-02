const telaUm = document.getElementById("tela-csat");
const telaDois = document.getElementById("tela-nps");
const telaTres = document.getElementById("tela-agradecimento");

const blocoCarinhas = document.querySelectorAll(".btn-avaliacao");
const botoesNps = document.querySelectorAll(".btn-nps");


function avancarParaNps(){
    telaUm.style.display = "none";
    telaDois.style.display = "flex";
}

function finalizarAvaliacao(){
    telaDois.style.display = "none";
    telaTres.style.display = "flex";
}

blocoCarinhas.forEach(botao => {
    botao.addEventListener("click", avancarParaNps)});

botoesNps.forEach(botao => {
    botao.addEventListener("click", finalizarAvaliacao)});
