const { chooseYourCar } = require('./chooseYourCar');
const expect = require('chai').expect;

describe('test choosingType function', function () {
    it('should throw an error if year is invalid', function () {
        expect(() => chooseYourCar.choosingType('Sedan', 'black', 2023)).to.throw();
        expect(() => chooseYourCar.choosingType('Sedan', 'black', 1899)).to.throw();
    });
    it('should throw an error if type is not Sedan', function () {
        expect(() => chooseYourCar.choosingType('Hatchback', 'black', 2013)).to.throw();
        expect(() => chooseYourCar.choosingType('sedan', 'black', 2013)).to.throw();
    });
    it('should meet the requirements if year >= 2010', function () {
        expect(chooseYourCar.choosingType('Sedan', 'black', 2013)).to.equal("This black Sedan meets the requirements, that you have.");
        expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.equal("This black Sedan meets the requirements, that you have.");
    });
    it('should not meet the requirements if year < 2010', function () {
        expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.equal("This Sedan is too old for you, especially with that black color.");
    });
});

describe('test brandName function', function () {
    it('should remove element as specified index', function () {
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
    });
    it('should return error if given invalid array', function () {
        expect(() => chooseYourCar.brandName(2, 2)).to.throw();
        expect(() => chooseYourCar.brandName('Toyota, BMW', 2)).to.throw();
        expect(() => chooseYourCar.brandName({ 'car': 'Peugeot' }, 2)).to.throw();
    });
    it('should return error if given invalid index', function () {
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw();
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw();
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [1])).to.throw();
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '2')).to.throw();
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], { 'num': 3 })).to.throw();
    });
});

describe('test carFuelConsumption function', function () {
    it('should be efficient if liters per 100km <= 7 liters', function () {
        expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
    });
    it('should not be efficient if liters per 100km > 7 liters', function () {
        expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
    });
    it('should format the result to the second digit after the decimal point', function () {
        expect(chooseYourCar.carFuelConsumption(100, 6.61111)).to.equal('The car is efficient enough, it burns 6.61 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 8.81111)).to.equal('The car burns too much fuel - 8.81 liters!');
    });
    it('should return error is input is invalid', function () {
        expect(() => chooseYourCar.carFuelConsumption(100, '5')).to.throw();
        expect(() => chooseYourCar.carFuelConsumption(100, [5])).to.throw();
        expect(() => chooseYourCar.carFuelConsumption(100, { 'num': 5 })).to.throw();
        expect(() => chooseYourCar.carFuelConsumption('100', 5)).to.throw();
        expect(() => chooseYourCar.carFuelConsumption([100], 5)).to.throw();
        expect(() => chooseYourCar.carFuelConsumption({ 'num': 100 }, 5)).to.throw();
        expect(() => chooseYourCar.carFuelConsumption(-100, 5)).to.throw();
        expect(() => chooseYourCar.carFuelConsumption(100, -5)).to.throw();
    });
});