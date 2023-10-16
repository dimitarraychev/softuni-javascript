const { describe } = require('mocha');
const { movieTheater } = require('./03. Movie Theater');
const expect = require('chai').expect;

describe('test ageRestrictions function of the object', function () {
    it('should return all ages admitted if given G rating', function () {
        expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
    });
    it('should return parental guidance suggested if given PG rating', function () {
        expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
    });
    it('should return restricted if given R rating', function () {
        expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
    });
    it('should return no one under 17 if given NC-17 rating', function () {
        expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
    });
    it('should return no age restrictions if conditions not met', function () {
        expect(movieTheater.ageRestrictions('')).to.equal('There are no age restrictions for this movie');
    });
});

describe('test moneySpent function of the object', function () {
    it('should return error if tickets is not a number', function () {
        expect((() => movieTheater.moneySpent('asd', [], []))).to.throw();
        expect((() => movieTheater.moneySpent([2], [], []))).to.throw();
        expect((() => movieTheater.moneySpent({ num: 3 }, [], []))).to.throw();
    });
    it('should return error if food is not an array', function () {
        expect((() => movieTheater.moneySpent(2, 2, []))).to.throw();
        expect((() => movieTheater.moneySpent(2, 'dfg', []))).to.throw();
        expect((() => movieTheater.moneySpent(2, { food: 'Nachos' }, []))).to.throw();

    });
    it('should return error if drink is not an array', function () {
        expect((() => movieTheater.moneySpent(2, [], 3))).to.throw();
        expect((() => movieTheater.moneySpent(2, [], 'soda'))).to.throw();
        expect((() => movieTheater.moneySpent(2, [], { food: 'Soda' }))).to.throw();
    });
    it('should return correct price without discount', function () {
        expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 23.50');
    });
    it('should return correct price with discount', function () {
        expect(movieTheater.moneySpent(3, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 47.60');
    });
});

describe('test reservation function of the object', function () {
    it('should return error if given invalid parameters', function () {
        expect((() => movieTheater.reservation(1, []))).to.throw();
        expect((() => movieTheater.reservation(1, 2))).to.throw();
        expect((() => movieTheater.reservation({}, 2))).to.throw();
        expect((() => movieTheater.reservation('foobar', 2))).to.throw();
        expect((() => movieTheater.reservation([], '2'))).to.throw();
        expect((() => movieTheater.reservation([], { seats: 2 }))).to.throw();
        expect((() => movieTheater.reservation([], []))).to.throw();
    });
    it('should work properly if given valid parameters', function () {
        expect(movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]), 3)).to.equal(2);
    });
});