let votosBom = 0;
let votosRegular = 0;
let votosRuim = 0;

let botaoBom = document.getElementById("btn-bom");
let botaoRegular = document.getElementById("btn-regular");
let botaoRuim = document.getElementById("btn-ruim");
let textoAgradecimento = document.getElementById("mensagem-agradecimento");
let textoContagemVotos = document.getElementById("total-votos");


botaoBom.addEventListener("click", function(){
    votosBom = votosBom + 1;
    console.log("Alguém votou em BOM! Total: " + votosBom);
    textoAgradecimento.innerText = "Obrigado pela sua avaliação!";
    setTimeout(function(){
        textoAgradecimento.innerText = "";
    }, 3000);
    atualizarPainelDoGerente();
});

botaoRegular.addEventListener("click", function(){
    votosRegular = votosRegular + 1;
    console.log("Alguém votou em REGULAR! Total: " + votosRegular);
    textoAgradecimento.innerText = "Agradecemos o feedback! Vamos melhorar.";
    setTimeout(function(){
        textoAgradecimento.innerText = "";
    }, 4000);
    atualizarPainelDoGerente();
});

botaoRuim.addEventListener("click", function(){
    votosRuim = votosRuim + 1;
    console.log("Alguém votou em RUIM! Total: " + votosRuim);
    textoAgradecimento.innerText = "Pedimos desculpas. Vamos resolver isso!";
    setTimeout(function(){
        textoAgradecimento.innerText = "";
    }, 5000);
    atualizarPainelDoGerente();
});

function atualizarPainelDoGerente(){
    let totalDeVotos = votosBom + votosRegular + votosRuim;
    textoContagemVotos.innerText = "A contagem total de votos é " + totalDeVotos;
}

