const Calculator = require('../../app/calculator.js');
const { expect, assert } = require('chai');

describe ('calculator', function() {
    let calculator;
    this.beforeEach(function() {
       calculator = new Calculator(); 
    });
    this.afterEach(function() {
       calculator = null; 
    });

    it('should return 5 when add 2 to 3', function() {
        expect(calculator.add(2,3)).to.be.equal(5);
    });

    it('should return 3.5 when add 0 to 3.5', function() {
        expect(calculator.add(0,3.5)).to.be.equal(3.5);
    });

    it('should return -15 when add -5 to -10', function() {
        expect(calculator.add(-5,-10)).to.be.equal(-15);
    });

    it('should return Not a number when add 5 to s', function() {
        assert.throws(function() {
            calculator.add(5,'a'), Error, /Not a Number/;});
    });

    it('should return 15 when multiple 3 and 5', function() {
        expect(calculator.multiple(3,5)).to.be.equal(15);
    });

    it('should return 6 when multiple 1.5 and 4', function() {
        expect(calculator.multiple(1.5,4)).to.be.equal(6);
    });

    it('should return Not a number when add A to b', function() {
        assert.throws(function() {
            calculator.add('A','b'), Error, /Not a Number/;});
    });
});