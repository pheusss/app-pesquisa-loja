let votosBom = 0;
let votosRegular = 0;
let votosRuim = 0;

let botaoBom = document.getElementById("btn-bom");
let botaoRegular = document.getElementById("btn-regular");
let botaoRuim = document.getElementById("btn-ruim");

botaoBom.addEventListener("click", function(){
    votosBom = votosBom + 1;
    console.log("Alguém votou em BOM! Total: " + votosBom);
});

botaoRegular.addEventListener("click", function(){
    votosRegular = votosRegular + 1;
    console.log("Alguém votou em REGULAR! Total: " + votosRegular);
});

botaoRuim.addEventListener("click", function(){
    votosRuim = votosRuim + 1;
    console.log("Alguém votou em RUIM! Total: " + votosRuim);
})