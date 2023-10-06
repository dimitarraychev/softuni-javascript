const expect = require('chai').expect;
const { isOddOrEven } = require('./isOddOrEven');

describe('when given valid argument', function () {
    it('should return even if string length is even', function () {
        expect(isOddOrEven('abba')).to.equal('even');
    });
    it('should return odd if string length is odd', function () {
        expect(isOddOrEven('abb')).to.equal('odd');
    });
});
describe('when given invalid argument', function () {
    it('should return undefined if given number', function () {
        expect(isOddOrEven(88)).to.be.undefined;
    });
    it('should return undefined if given array', function () {
        expect(isOddOrEven([88, 'asd'])).to.be.undefined;
    });
    it('should return undefined if given object', function () {
        expect(isOddOrEven({ num1: 2, num2: 6 })).to.be.undefined;
    });
});