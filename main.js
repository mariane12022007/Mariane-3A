const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivos2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-12-30T00:00:00");
const tempoObjetivo = new Date("2024-02-01T00:00:00");

const tempos =
[tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempos[0]);

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[1].textContent = tempoObjetivo2 - tempoAtual;
contadores[2].textContent = tempoObjetivo3 - tempoAtual;
contadores[3].textContent = tempoObjetivo4 - tempoAtual;

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor (tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
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