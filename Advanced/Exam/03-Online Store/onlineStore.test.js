const onlineStore = require('./onlineStore');
const expect = require('chai').expect;

describe('test isProductAvailable function', function () {

    it('should return "out of stock..." if stockQuantity is 0 or less', function () {
        expect(onlineStore.isProductAvailable('Product', 0)).to.equal('Sorry, Product is currently out of stock.');
        expect(onlineStore.isProductAvailable('Product', -3)).to.equal('Sorry, Product is currently out of stock.');
    });

    it('should return "available..." if stockQuantity is greater than 0', function () {
        expect(onlineStore.isProductAvailable('Product', 1)).to.equal('Great! Product is available for purchase.');
    });

    it('should throw "Invalid input." if given invalid input', function () {
        expect(() => onlineStore.isProductAvailable('Product', '1')).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable('Product', [1])).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable('Product', { num: 1 })).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable('Product', true)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(1, 1)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(['Product'], 1)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable({ value: 'Product' }, 1)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(true, 1)).to.throw('Invalid input.')
        expect(() => onlineStore.isProductAvailable(1)).to.throw('Invalid input.')
        expect(() => onlineStore.isProductAvailable('Product')).to.throw('Invalid input.')
        expect(() => onlineStore.isProductAvailable(true)).to.throw('Invalid input.')
        expect(() => onlineStore.isProductAvailable([1, 2, 3])).to.throw('Invalid input.')
    });

});

describe('test canAffordProduct function', function () {

    it('should return "insufficient funds..." if result is less than 0', function () {
        expect(onlineStore.canAffordProduct(10, 9)).to.equal("You don't have sufficient funds to buy this product.");
    });

    it('should return "product purchased..." if result is 0 or more', function () {
        expect(onlineStore.canAffordProduct(10, 10)).to.equal("Product purchased. Your remaining balance is $0.");
        expect(onlineStore.canAffordProduct(10, 20)).to.equal("Product purchased. Your remaining balance is $10.");
    });

    it('should throw "Invalid input." if input is invalid', function () {
        expect(() => onlineStore.canAffordProduct('10', 20)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct([10], 20)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct({ num: 10 }, 20)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(true, 20)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(10, '20')).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(10, [20])).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(10, { num: 20 })).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(10, true)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(10)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct('asd')).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(true)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct([1, 2, 3])).to.throw('Invalid input.');
    });
});

describe('test getRecommendedProducts function', function () {

    it('should return recommended products if there is a match', function () {
        expect(onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }], 'this'))
            .to.equal('Recommended products in the this category: A');
        expect(onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }, { name: 'C', category: 'this' }], 'this'))
            .to.equal('Recommended products in the this category: A, C');
    });

    it('should return "Sorry..." if there is no match', function () {
        expect(onlineStore.getRecommendedProducts([{ name: 'A', category: 'nope' }, { name: 'B', category: 'nope' }], 'this'))
            .to.equal('Sorry, we currently have no recommended products in the this category.');
    });

    it('should throw "Invalid input." if input is invalid', function () {
        expect(() => onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }], 2)).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }], ['this'])).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }], { category: 'this' })).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts([{ name: 'A', category: 'this' }, { name: 'B', category: 'nope' }], true)).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts({ name: 'A', category: 'this' }, 'this')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(23, 'this')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(true, 'this')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts('this', 'this')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts('this')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(2)).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts([])).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts({})).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(true)).to.throw('Invalid input.');
    });
});