/**
 * 
 * Class containing methods to add and multiple numbers
 * @class Calculator
 */
class Calculator {
    /**
     * Creates an instance of Calculator.
     * 
     * @memberOf Calculator
     */
    constructor() {
    };

    /**
     * 
     * 
     * @param {Number} numberFirst first number for adding
     * @param {Number} numberSecond second number for adding
     * @returns sum of numbers
     * 
     * @memberOf Calculator
     */
    add(numberFirst, numberSecond) {
        if (typeof numberFirst === 'number' && typeof numberSecond === 'number') {
            return numberFirst + numberSecond;
        } else {
            throw new Error;
        }
    };

    /**
     * 
     * 
     * @param {Number} numberFirst first number for multiplying
     * @param {Number} numberSecond second number for multiplying
     * @returns multiplied
     * 
     * @memberOf Calculator
     */
    multiple(numberFirst, numberSecond) {
        if (typeof numberFirst === 'number' && typeof numberSecond === 'number') {
            return numberFirst * numberSecond;
        } else {
            throw new Error('Not a number');
        }
    }
}

module.exports = Calculator;