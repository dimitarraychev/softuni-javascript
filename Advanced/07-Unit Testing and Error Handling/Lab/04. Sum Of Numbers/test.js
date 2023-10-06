const assert = require("chai").assert;
const expect = require("chai").expect;

const { sum } = require('./sumOfNumbers');

describe('sum', function () {
    it('should sum an array', function () {
        expect(sum([2, 3, 5])).to.be.equal(10);
    });
});