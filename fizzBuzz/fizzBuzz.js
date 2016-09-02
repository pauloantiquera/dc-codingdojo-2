'use strict'

var speak = function(numero){
    var retorno = teste(numero, 3, 'fizz');
    retorno += teste(numero, 5, 'buzz');
    retorno += teste(numero, 7, 'whizz');

    if (retorno === '')
        retorno = numero.toString();

    return retorno;
}

function teste(numero, divisor, texto) {
    if (isDivisivel(numero, divisor))
        return texto;
    return ""; 
}

function isDivisivel(numero, divisor) {
    return numero % divisor === 0;
}

module.exports = speak;