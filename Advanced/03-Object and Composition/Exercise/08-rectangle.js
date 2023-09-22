function rectangle(width, height, color) {

    let rectObj = {
        width,
        height,
        color: color[0].toUpperCase().concat(color.substring(1)),
        calcArea: function() {
            return this.width * this.height;
        }
    }

    return rectObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());