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

    it('should correctly add more that two positive numbers', function() {
        expect(calculator.add(2,3,10)).to.be.equal(15);
    });

    it('should correctly add float numbers', function() {
        expect(calculator.add(0,3.5)).to.be.equal(3.5);
    });

    it('should correctly add negative numbers', function() {
        expect(calculator.add(-5,-10)).to.be.equal(-15);
    });

    it('should not add number to letter', function() {
        assert.throws(function() {
            calculator.add(5,'a'), Error, /Not a Number/;});
    });

    it('should correctly multiply positive numbers', function() {
        expect(calculator.multiply(3,5)).to.be.equal(15);
    });

    it('should correctly multiply float numbers', function() {
        expect(calculator.multiply(1.5,4)).to.be.equal(6);
    });

    it('should not multiply number and letter', function() {
        assert.throws(function() {
            calculator.multiply(5,'A'), Error, /Not a Number/;});
    });

    it('should correctly multiply to zero', function() {
        expect(calculator.multiply(0,5)).to.be.equal(0);
    });
});