const expect = require('chai').expect;
const { lookupChar } = require('./charLookUp');

describe('if given valid arguments', function () {
    it('should return the index of a character', function () {
        expect(lookupChar('abc', 2)).to.equal('c');
    });
});
describe('if given invalid arguments', function () {
    it('should return undefined if given numbers', function () {
        expect(lookupChar(66, 1)).to.be.undefined;
        expect(lookupChar('abc', 1.2)).to.be.undefined;     
    });
    it('should return undefined if given strings', function () {
        expect(lookupChar('abba', '1')).to.be.undefined;
    });
    it('should return undefined if given array', function () {
        expect(lookupChar(['abc'], 1)).to.be.undefined;
        expect(lookupChar('abba', [2])).to.be.undefined;
    });
    it('should return undefined if given object', function () {
        expect(lookupChar({ str: 'sad' }, 1)).to.be.undefined;
        expect(lookupChar('abba', { num: 2 })).to.be.undefined;
    });
});
describe('if given invalid index', function () {
    it('should return Incorrect index message', function () {
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
        expect(lookupChar('abc', -2)).to.equal('Incorrect index');
        expect(lookupChar('abc', 6)).to.equal('Incorrect index');
    });
});