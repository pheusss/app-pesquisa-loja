const telaUm = document.getElementById("tela-csat");
const telaDois = document.getElementById("tela-nps");
const telaTres = document.getElementById("tela-agradecimento");

const blocoCarinhas = document.querySelectorAll(".btn-avaliacao");
const botoesNps = document.querySelectorAll(".btn-nps");


function avancarParaNps(idDoVoto){
    console.log("O cliente clicou na carinha: " + idDoVoto);

    telaUm.style.display = "none";
    telaDois.style.display = "flex";
}

function finalizarAvaliacao(){
    telaDois.style.display = "none";
    telaTres.style.display = "flex";
    setTimeout(() => {
        telaTres.style.display = "none";
        telaUm.style.display = "flex";
        }, 3000);
}

blocoCarinhas.forEach(botao => {
    botao.addEventListener("click", () => {
        avancarParaNps(botao.id);
    });
});

botoesNps.forEach(botao => {
    botao.addEventListener("click", finalizarAvaliacao)});
