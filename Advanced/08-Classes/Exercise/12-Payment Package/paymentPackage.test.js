const { PaymentPackage } = require('./paymentPackage');
const expect = require('chai').expect;

describe('test if it returns an object and all values are present', function () {

    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HBO', 20)
    });

    it('should return an object', function () {
        expect(paymentPackage).to.be.instanceOf(Object);
    });
    it('should return an object with correct name', function () {
        expect(paymentPackage._name).to.be.equal('HBO');
    });
    it('should return an object with correct value', function () {
        expect(paymentPackage._value).to.be.equal(20);
    });
    it('should return an object with correct VAT', function () {
        expect(paymentPackage._VAT).to.be.equal(20);
    });
    it('should return an object with correct active status', function () {
        expect(paymentPackage._active).to.be.true;
    });
    it('should return an object with correct toString function for active', function () {
        expect(paymentPackage.toString()).to.be.equal('Package: HBO\n- Value (excl. VAT): 20\n- Value (VAT 20%): 24');
    });
    it('should return an object with correct toString function for inactive', function () {
        paymentPackage.active = false;
        expect(paymentPackage.toString()).to.be.equal('Package: HBO (inactive)\n- Value (excl. VAT): 20\n- Value (VAT 20%): 24');
    });
    it('should be able to set value to null', () => {
        expect(() => paymentPackage.value = 0).to.not.throw();
    });
});
// describe('test initiating with invalid values', function () {

//     let paymentPackage;
//     beforeEach(() => {
//         paymentPackage = new PaymentPackage('HBO', 20)
//     });

//     it('should throw error if name is empty', function () {
//         expect(() => paymentPackage.name = '').to.throw();
//     });
//     it('should throw error if value is negative', function () {
//         expect(() => paymentPackage.value = -5).to.throw();
//     });
//     it('should throw error if VAT is negative', function () {
//         expect(() => paymentPackage.VAT = -5).to.throw();
//     });
//     it('should throw error if active is not boolean', function () {
//         expect(() => paymentPackage.active = -5).to.throw();
//         expect(() => paymentPackage.active = '').to.throw();
//     });
// });