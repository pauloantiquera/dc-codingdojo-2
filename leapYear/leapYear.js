'use strict'

var isLeapYear = function(year) {

    if (!isDivisibleBy(year, 4)) {
        return false;
    }

    if (!isDivisibleBy(year, 100)) {
        return true;
    }

    if (isDivisibleBy(year, 400)) {
        return true;
    } 

    return false;
}

function isDivisibleBy(number, divisor) {
    return number % divisor === 0;
}

module.exports = isLeapYear;