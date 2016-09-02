'use strict'

xdescribe('LeapYear Unit Test Suit - isLeapYear()', function() {
    const isLeapYear = require('../leapYear');

    it('should be true when year is divisble by 4', function() {
        expect(isLeapYear(1996)).toBe(true);
    });

    it('deve ser falso quando o ano eh divisivel por 100 e naum por 400', function() {
        expect(isLeapYear(1900)).toBe(false);
    });

    it('deve ser true quando o ano eh divisivel por 100 e por 400', function() {
        expect(isLeapYear(2000)).toBe(true);
    });
});