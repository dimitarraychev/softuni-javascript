const expect = require('chai').expect;
const { createCalculator } = require('./addSubtract');

describe('createCalculator', function () {
    // Testing returned object
    it('should return an object', function () {
        expect(createCalculator()).instanceOf(Object);
    });
    it('should return an object with function add', function () {
        expect(createCalculator().add).instanceOf(Function);
    });
    it('should return an object with function subtract', function () {
        expect(createCalculator().subtract).instanceOf(Function);
    });
    it('should return an object with function get', function () {
        expect(createCalculator().get).instanceOf(Function);
    });

    //Testing sum modification
    it('should not allow modification of internal sum', function () {
        let func = createCalculator();
        func.add(5);
        expect(createCalculator().get()).to.equal(0);
    });

    //Testing returned functions
    it('should have working add function', function () {
        let func = createCalculator();
        func.add(5);
        expect(func.get()).to.equal(5);
    });
    it('should have working subtract function', function () {
        let func = createCalculator();
        func.subtract(5);
        expect(func.get()).to.equal(-5);
    });
    it('should have working get function', function () {
        let func = createCalculator();
        expect(func.get()).to.equal(0);
    });

    //Testing the parsing functionality
    it('should parse string to number in add function', function () {
        let func = createCalculator();
        func.add('5');
        expect(func.get()).to.equal(5);
    });
    it('should parse string to number in subtract function', function () {
        let func = createCalculator();
        func.subtract('5');
        expect(func.get()).to.equal(-5);
    });
});