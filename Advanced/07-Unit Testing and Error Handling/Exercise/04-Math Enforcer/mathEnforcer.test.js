const expect = require('chai').expect;
const { mathEnforcer } = require('./mathEnforcer');

describe('testing main function', function () {
    it('should return an object', function () {
        expect(mathEnforcer).to.be.instanceOf(Object);
    });
    it('should return object with addFive function', function () {
        expect(mathEnforcer.addFive).to.be.instanceOf(Function);
    });
    it('should return object with subtractTen function', function () {
        expect(mathEnforcer.subtractTen).to.be.instanceOf(Function);
    });
    it('should return object with sum function', function () {
        expect(mathEnforcer.sum).to.be.instanceOf(Function);
    });
});
describe('testing addFive function', function () {
    describe('with invalid values', function () {
        it('should return undefined if given string', function () {
            expect(mathEnforcer.addFive('asd')).to.be.undefined;
            expect(mathEnforcer.addFive('2')).to.be.undefined;

        });
        it('should return undefined if given array', function () {
            expect(mathEnforcer.addFive([10])).to.be.undefined;
        });
        it('should return undefined if given object', function () {
            expect(mathEnforcer.addFive({ num: 10 })).to.be.undefined;
        });
    });
    describe('with valid values', function () {
        it('should return 15 when given 10', function () {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('should return 5 when given 0', function () {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it('should return 3 when given -2', function () {
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        });
        it('should return 5.5 when given 0.5', function () {
            expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
        });
    })
});
describe('testing subtractTen function', function () {
    describe('with invalid values', function () {
        it('should return undefined if given string', function () {
            expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
            expect(mathEnforcer.subtractTen('2')).to.be.undefined;

        });
        it('should return undefined if given array', function () {
            expect(mathEnforcer.subtractTen([10])).to.be.undefined;
        });
        it('should return undefined if given object', function () {
            expect(mathEnforcer.subtractTen({ num: 10 })).to.be.undefined;
        });
    });
    describe('with valid values', function () {
        it('should return 0 when given 10', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('should return -10 when given 0', function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it('should return -12 when given -2', function () {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        });
        it('should return 5.5 when given 15.5', function () {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
        });
    })
});
describe('testing sum function', function () {
    describe('with invalid values', function () {
        it('should return undefined if given string', function () {
            expect(mathEnforcer.sum('asd', 2)).to.be.undefined;
            expect(mathEnforcer.sum(2, '2')).to.be.undefined;

        });
        it('should return undefined if given array', function () {
            expect(mathEnforcer.sum([10, 2])).to.be.undefined;
            expect(mathEnforcer.sum([10, 2], [])).to.be.undefined;

        });
        it('should return undefined if given object', function () {
            expect(mathEnforcer.sum({ num1: 10, num2: 20 })).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;

        });
    });
    describe('with valid values', function () {
        it('should return 35 when given 15 and 20', function () {
            expect(mathEnforcer.sum(15, 20)).to.equal(35);
        });
        it('should return -10 when given -20 and 10', function () {
            expect(mathEnforcer.sum(-20, 10)).to.equal(-10);
            expect(mathEnforcer.sum(10, -20)).to.equal(-10);

        });
        it('should return -12 when given -2 and - 10', function () {
            expect(mathEnforcer.sum(-2, -10)).to.equal(-12);
        });
        it('should return 4.5 when given 2,25 and 2,25', function () {
            expect(mathEnforcer.sum(2.25, 2.25)).to.equal(4.5);
        });
    });
});