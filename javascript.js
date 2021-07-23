var qtdNumerosMega;
var qtdNumerosLotofacil;
var qtdNumerosQuina;


function compararNumeros(a, b) {
    return a - b;
}


function sorteioMega() {
    qtdNumerosMega = document.getElementById('qtdNumerosMega').value;


    var numerosSorteados = [];
    var min = 1;
    var max = 60;
    while (numerosSorteados.length < qtdNumerosMega) {


        var dezena = (Math.floor(Math.random() * (max - min + 1)) + min);
        dezena = dezena.toFixed();

        if (numerosSorteados.includes(dezena)) {
        }
        else {
            numerosSorteados.push(dezena);
        }

    }

    numerosSorteados.sort(compararNumeros);
    document.getElementById("resultado-mega").value = numerosSorteados;
    // console.log(qtdNumeros)
    // console.log(numerosSorteados)
}


function sorteioLotofacil() {
    qtdNumerosLotofacil = document.getElementById('qtdNumerosLotofacil').value;
    var numerosSorteados = [];
    var min = 1;
    var max = 25;

    while (numerosSorteados.length < qtdNumerosLotofacil) {

        var dezena = (Math.floor(Math.random() * (max - min + 1)) + min);
        dezena = dezena.toFixed();

        if (numerosSorteados.includes(dezena)) {
        }

        else {
            numerosSorteados.push(dezena);
        }

    }
    numerosSorteados.sort(compararNumeros);


    /*  codigo CSS*/

    document.getElementById('resultado-lotofacil').style.fontSize = "1.5rem";
    /*  codigo CSS*/

    document.getElementById('resultado-lotofacil').value = numerosSorteados;
}

function sorteioQuina() {
    qtdNumerosQuina = document.getElementById('qtdNumerosQuina').value;
    var numerosSorteados = [];
    var min = 1;
    var max = 80;
    while (numerosSorteados.length < qtdNumerosQuina) {
        dezena = (Math.floor(Math.random() * (max - min + 1)) + min);
        dezena = dezena.toFixed();

        if (numerosSorteados.includes(dezena)) {

        }
        else {
            numerosSorteados.push(dezena);
        }
    }
    numerosSorteados.sort(compararNumeros);
    document.getElementById('resultado-quina').value = numerosSorteados;
}

function sorteioLotomania() {
    var numerosSorteados = [];
    var min = 1;
    var max = 100;

    while (numerosSorteados.length < 50) {
        dezena = (Math.floor(Math.random() * (max - min + 1)) + min);
        dezena = dezena.toFixed();

        if (numerosSorteados.includes(dezena)) {

        }
        else {
            numerosSorteados.push(dezena);
        }
    }
    numerosSorteados.sort(compararNumeros);

    document.getElementById('resultado-lotomania').textContent = numerosSorteados;
}



function sorteioMilhar(valor) {
    min = 0000;
    max = 9999;


    milhar = (Math.floor(Math.random() * (max - min + 1)) + min);

    document.getElementById('resultado-milhar').value = milhar;
}

function sorteioCentena(valor) {
    min = 000;
    max = 999;

    centena = (Math.floor(Math.random() * (max - min + 1)) + min);

    document.getElementById('resultado-centena').value = centena;
}

function sorteioDdz(valor) {
    numerosSorteados = []
    min = 01;
    max = 99;

    while (numerosSorteados.length < 2) {
        ddz = (Math.floor(Math.random() * (max - min + 1)) + min);

        if (numerosSorteados.includes(ddz)) {

        }
        else {
            numerosSorteados.push(ddz);
        }

    }
    numerosSorteados.sort(compararNumeros);
    document.getElementById('resultado-ddz').value = numerosSorteados;
}

function sorteioTdz(valor) {
    numerosSorteados = []
    min = 01;
    max = 99;

    while (numerosSorteados.length < 3) {
        tdz = (Math.floor(Math.random() * (max - min + 1)) + min);
        if (numerosSorteados.includes(tdz)) {

        }
        else {
            numerosSorteados.push(tdz);
        }


    }
    numerosSorteados.sort(compararNumeros);
    document.getElementById('resultado-tdz').value = numerosSorteados;
}

//console.log(qtdNumeros);