const expect = require('chai').expect;
const { rgbToHexColor } = require('./rgbToHex');

describe('rgbToHex', function () {
    it('should return white', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('should return black', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('should return blue', function () {
        expect(rgbToHexColor(64, 50, 168)).to.be.equal('#4032A8');
    });
    it('should return undefined if negative value', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('should return undefined if value outside range', function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it('should return undefined if given array', function () {
        expect(rgbToHexColor([256, 0, 0])).to.be.undefined;
    });
    it('should return undefined if given object', function () {
        expect(rgbToHexColor({ r: 256, g: 0, b: 0 })).to.be.undefined;
    });
});