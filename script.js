const telaUm = document.getElementById("tela-csat");
const telaDois = document.getElementById("tela-nps");
const telaTres = document.getElementById("tela-agradecimento");

const blocoCarinhas = document.querySelectorAll(".btn-avaliacao");
const botoesNps = document.querySelectorAll(".btn-nps");

const bancoDadosCarinha = {}
const bancoDadosNotas = {}


function avancarParaNps(idDoVoto){
   bancoDadosCarinha[idDoVoto] += 1; 

    console.log(`O cliente clicou na carinha: ${idDoVoto} e quantidade ${bancoDadosCarinha[idDoVoto]}`);
    console.log("Status do Armário inteiro:", bancoDadosCarinha);

    telaUm.style.display = "none";
    telaDois.style.display = "flex";
}

function finalizarAvaliacao(idDaNota){
    bancoDadosNotas[idDaNota] += 1;

    console.log(`A nota dada foi ${idDaNota}`);

    telaDois.style.display = "none";
    telaTres.style.display = "flex";
    setTimeout(() => {
        telaTres.style.display = "none";
        telaUm.style.display = "flex";
        }, 3000);
}

blocoCarinhas.forEach(botao => {
    bancoDadosCarinha[botao.id] = 0;

    botao.addEventListener("click", () => {
        avancarParaNps(botao.id);
    });
});

botoesNps.forEach(botao => {
    bancoDadosNotas[botao.id] = 0;

    botao.addEventListener("click", () => {
        finalizarAvaliacao(botao.id);
    });   
});
