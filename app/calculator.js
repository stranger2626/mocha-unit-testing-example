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

     * @returns sum of numbers
     * 
     * @memberOf Calculator
     */

     add(...args) {
        let sumOfNumbers = 0;
        args.forEach((el => {
            if (typeof el === 'number') {
                 sumOfNumbers += el;
            } else {
                throw new Error('Not a Number');
            }
        }));
        return sumOfNumbers;
    };

    /**
     * 
     * 
     
     * @returns multiplied amount of numbers
     * 
     * @memberOf Calculator
     */

     multiply(...args) {
        let sumOfNumbers = 1;
        args.forEach((el => {
            if (typeof el === 'number') {
                 sumOfNumbers *= el;
            } else {
                throw new Error('Not a Number');
            }
        }));
        return sumOfNumbers;
    };
}

module.exports = Calculator;