function somarTresNumeros (primeiroNumeroDigitado, segundoNumeroDigitado, terceiroNumeroDigitado) {
    return primeiroNumeroDigitado + segundoNumeroDigitado + terceiroNumeroDigitado;
} 

function retornarMensagemMarioQuintana () {
    return "Por que prender a vida em conceitos e normas? O Belo e o Feio... O Bom e o Mau... Dor e Prazer... Tudo, afinal, são formas E não degraus do Ser! Mário Quintana";
}

function retornarRestoDaDivisaoEntreDoisNumeros ( primeiroNumeroDigitado, segundoNumeroDigitado) {
    return primeiroNumeroDigitado % segundoNumeroDigitado;
}

function retornarIdadeEmDias (idade) {
    return 365 * idade
}

function retornarPerguntaAoUsuario () {
    var name = promt("Qual seu nome")
    return "Qual seu nome" + name;
}

function retornarAnoEmQueEstamos () {
    var year = (new Date()).getFullYear(); 
    return year;
}

function retornarSomaDeUmNumeroPositivo (numero) {
    if(numero < 0){
        return "Não podemos receber numeros negativos"
    } else {
        return numero + 1
    } 
}

function retornarSubtraçaoDeUmNumeroPositivo (numero) {
    if(numero >= 1){
        return numero - 1;
    } else {
        return "Não podemos aceitar numero 0 ou menor que 0"
    }
}

function retornarMutiplicaçaoDeUmNumeroPositivo (numeroUm, numeroDois) {
    if (numeroUm || numeroDois > 0) {
        return numeroUm * numeroDois;
    } else {
        return "erro, numero menor que 1 não são aceitos"
    }
}

function retornarResultadoDaExponenciação (base, potencia) {
    return base ** potencia;
} 

function minhaMusica () {
    return "https://youtu.be/5tr_qRryQDg voz por fernandinho"
}

function retornarResultadoDoCalculo (raio) {
    return PI = raio ** 2
}