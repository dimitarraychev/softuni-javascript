const expect = require("chai").expect;
const { isSymmetric } = require('./isSymmetric');

describe('isSymmetric', function () {
    it('should return true if symmetric', function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('should return false if not symmetric', function () {
        expect(isSymmetric([1, 2, 4])).to.be.false;
    });
    it('should return true if empty arr', function () {
        expect(isSymmetric([])).to.be.true;
    });
    it('should return false on same string and number in array)', () => {
        expect(isSymmetric(["2", 2])).to.be.false;
    });
    it('should return false if given number', function () {
        expect(isSymmetric(6)).to.be.false;
    });
    it('should return false if given string', function () {
        expect(isSymmetric('abba')).to.be.false;
    });
    it('should return false if given object', function () {
        expect(isSymmetric({ a: 1, b: 2, a: 1 })).to.be.false;
    });
});