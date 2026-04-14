let votosPessimo = 0;
let votosRuim = 0;
let votosNeutro = 0;
let votosBom = 0;
let votosExcelente = 0;

let botaoZero = 0;
let botaoUm = 0;
let botaoDois = 0;
let botaoTres = 0;
let botaoQuatro = 0;
let botaoCinco = 0;
let botaoSeis = 0;
let botaoSete = 0;
let botaoOito = 0;
let botaoNove = 0;
let botaoDez = 0;

const telaUm = document.getElementById("tela-csat");
const telaDois = document.getElementById("tela-nps");
const telaTres = document.getElementById("tela-agradecimento");

const blocoCarinhas = document.querySelectorAll(".btn-avaliacao");
const botoesNps = document.querySelectorAll(".btn-nps");


function avancarParaNps(idDoVoto){
    if(idDoVoto === "btn-pessimo"){
        votosPessimo = votosPessimo + 1;
    }else if(idDoVoto === "btn-ruim"){
        votosRuim = votosRuim + 1;
    }else if(idDoVoto === "btn-neutro"){
        votosNeutro = votosNeutro + 1;
    }else if(idDoVoto === "btn-bom"){
        votosBom = votosBom + 1;
    }else if(idDoVoto === "btn-excelente"){
        votosExcelente = votosExcelente + 1;
    }

    console.log(`O cliente clicou na carinha:  ${idDoVoto} e quantidade é ${votosRuim}`);

    telaUm.style.display = "none";
    telaDois.style.display = "flex";
}

function finalizarAvaliacao(idDaNota){
    if(idDaNota === "btn-0"){
        botaoZero = botaoZero + 1;
        console.log (`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoZero}`);
    }else if(idDaNota === "btn-1"){
        botaoUm = botaoUm + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoUm}`);
    }else if(idDaNota === "btn-2"){
        botaoDois = botaoDois + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoDois}`);
    }else if(idDaNota === "btn-3"){
        botaoTres = botaoTres + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoTres}`);
    }else if(idDaNota === "btn-4"){
        botaoQuatro = botaoQuatro + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoQuatro}`);
    }else if(idDaNota === "btn-5"){
        botaoCinco = botaoCinco + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoCinco}`);
    }else if(idDaNota === "btn-6"){
        botaoSeis = botaoSeis + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoSeis}`);
    }else if(idDaNota === "btn-7"){
        botaoSete = botaoSete + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoSete}`);
    }else if(idDaNota === "btn-8"){
        botaoOito = botaoOito + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoOito}`);
    }else if(idDaNota === "btn-9"){
        botaoNove = botaoNove + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoNove}`);
    }else if(idDaNota === "btn-10"){
        botaoDez = botaoDez + 1;
        console.log(`O cliente deu a nota: ${idDaNota} e quantidade é ${botaoDez}`);
    }
    

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
    botao.addEventListener("click", () => {
        finalizarAvaliacao(botao.id);
    });   
});
