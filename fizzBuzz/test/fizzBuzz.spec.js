'use strict'

describe('FizzBuzz Unit Test Suit - speak()', function() {
    const speak = require('../fizzBuzz');

    it('deve escrever o numero', function() {
        expect(speak(1)).toBe('1');
    });

    it('deve escrever fizz se for divisivel por 3', function() {
        expect(speak(3)).toBe('fizz');
    });

    it('deve escrever buzz se for divisivel por 5', function() {
        expect(speak(5)).toBe('buzz');
    });

    it('deve escrever fizzbuzz se for divisivel por 3 e 5', function() {
        expect(speak(15)).toBe('fizzbuzz');
    });

    it('deve escrever whizz se for divisivel por 7', function() {
        expect(speak(7)).toBe('whizz');
    });

    it('deve escrever fizzbuzz se for divisivel por 3 e 7', function() {
        expect(speak(21)).toBe('fizzwhizz');
    });

    it('deve escrever fizzbuzz se for divisivel por 5 e 7', function() {
        expect(speak(35)).toBe('buzzwhizz');
    });

    it('deve escrever fizzbuzz se for divisivel por 3, 5 e 7', function() {
        expect(speak(105)).toBe('fizzbuzzwhizz');
    });
});