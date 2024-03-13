const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor (tempoFinal / 1000);
    return segundos;
}

contadores[0].textContent="contagem regressiva";

for (let i=0;i < botões.length; i++) {
    console.log(i);
    botoes[i].onclick = function() {

        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}