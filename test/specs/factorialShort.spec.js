const Factorial = require('../../app/factorial.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('factorialShort', function() {
    let factorial, spy;

    beforeEach(() => {
        factorial = new Factorial();
        spy = chai.spy.on(factorial, 'factorialShort');
    });

    afterEach(() => {
        factorial = null;
    });

    it('should return 6 when called with number 3', function() {
        expect(factorial.factorialShort(3)).to.be.equal(6);
    });

    it('should return 362880 when called with number 9', function() {
        expect(factorial.factorialShort(9)).to.be.equal(362880);
    });

    it('should throw an error if provided with a negative number', function() {
        let callWithError = () => factorial.factorialShort(-1);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Negative number!`);
    });

    it('should be called twice when provided with 2', function() {
        factorial.factorialShort(2);
        expect(spy).to.have.been.called(2);
    });

    it('should return 1 when provided 1', function() {
        expect(factorial.factorialShort(1)).to.be.equal(1);
    });
});