const Factorial = require('../../app/factorial.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('factorialSimple', function() {
    let factorial, spy;

    beforeEach(() => {
        factorial = new Factorial();
        spy = chai.spy.on(factorial, 'factorialSimple');
    });

    afterEach(() => {
        factorial = null;
    });

    it('should return 6 when called with number 3', function() {
        expect(factorial.factorialSimple(3)).to.be.equal(6);
    });

    it('should return 362880 when called with number 9', function() {
        expect(factorial.factorialSimple(9)).to.be.equal(362880);
    });

    it('should throw an error if provided with a negative number', function() {
        let callWithError = () => factorial.factorialSimple(-1);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Negative number!`);
    });

    it('should be called twice when provided with 2', function() {
        factorial.factorialSimple(2);
        expect(spy).to.have.been.called(1);
    });

    it('should return 1 when provided 1', function() {
        expect(factorial.factorialSimple(1)).to.be.equal(1);
    });
});