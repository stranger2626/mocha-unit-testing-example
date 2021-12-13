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
     add() {
        var sumOfNumbers = 0;
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'number') {
                    sumOfNumbers += arguments[i];
                } else {
                    throw new Error('Not a Number');
                }
            }
            return sumOfNumbers;
        }
    
    /**
     * 
     * 
     
     * @returns multiplied amount of numbers
     * 
     * @memberOf Calculator
     */

     multiply() {
        var sumOfNumbers = 1;
          for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'number') {
                sumOfNumbers *= arguments[i];
            } else {
                throw new Error('Not a Number');
            }
        } 
        return sumOfNumbers;
    };
}

module.exports = Calculator;