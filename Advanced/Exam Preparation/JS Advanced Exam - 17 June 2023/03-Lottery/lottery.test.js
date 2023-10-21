const lottery = require('./lottery');
const expect = require('chai').expect;

describe('test buyLotteryTicket functionality of object', function () {

    it('should throw error if submitted invalid parameters', function () {
        expect(() => lottery.buyLotteryTicket(2, 2, 2)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, 2, 'asd')).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, 2, {})).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, 2, [])).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, '2', true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, ['2'], true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, { num: 2 }, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, true, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket('2', 2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(['2'], 2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket({ num: 2 }, 2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(true, 2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(0, 2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, 0, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(2, -3, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(-3, 2, true)).to.throw('Invalid input!');

    });

    it('should throw error if buy is false', function () {
        expect(() => lottery.buyLotteryTicket(2, 2, false)).to.throw('Unable to buy lottery ticket');
    });

    it('should return purchase string with valid input', function () {
        expect(lottery.buyLotteryTicket(2, 2, true)).to.equal('You bought 2 tickets for 4$.');
        expect(lottery.buyLotteryTicket(1, 2, true)).to.equal('You bought 2 tickets for 2$.');
        expect(lottery.buyLotteryTicket(2, 1, true)).to.equal('You bought 1 tickets for 2$.');

    });
});

describe('test checkTicket functionality of object', function () {

    it('should throw an error if input is invalid', function () {
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 2)).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '2')).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], {})).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], true)).to.throw('Invalid input!');
        expect(() => lottery.checkTicket(2, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket('2', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket({}, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket(true, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, '2', 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], ['1, 2, 3, 4, 5, 6, 7'])).to.throw('Invalid input!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10])).to.be.undefined;
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 7, 8, 9, 10, 11])).to.be.undefined;
    });

    it('should return you win for 3-5 winning nums', function () {
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 9])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])).to.equal('Congratulations you win, check your reward!');

    });

    it('should return jackpot for all 6 winning nums', function () {
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });
});

describe('test secondChance functionality of object', function () {
    it('should throw an error if input is invalid', function () {
        expect(() => lottery.secondChance(2, 2)).to.throw('Invalid input!');
        expect(() => lottery.secondChance(2, 'asd')).to.throw('Invalid input!');
        expect(() => lottery.secondChance(2, {})).to.throw('Invalid input!');
        expect(() => lottery.secondChance(2, true)).to.throw('Invalid input!');
        expect(() => lottery.secondChance('asd', [])).to.throw('Invalid input!');
        expect(() => lottery.secondChance([], [])).to.throw('Invalid input!');
        expect(() => lottery.secondChance({}, [])).to.throw('Invalid input!');
        expect(() => lottery.secondChance(true, [])).to.throw('Invalid input!');
    });

    it('should return win if there is a match', function () {
        expect(lottery.secondChance(23, [1, 23, 8])).to.equal('You win our second chance prize!')
    });

    it('should return lose if there is no match', function () {
        expect(lottery.secondChance(23, [1, 2, 8])).to.equal("Sorry, your ticket didn't win!");
    });
});