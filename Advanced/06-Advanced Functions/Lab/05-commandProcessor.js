function result() {

    let result = '';

    return {
        append: function (str) {
            result += str;
        },
        removeStart: function (n) {
            result = result.substring(n);
        },
        removeEnd: function (n) {
            result = result.substring(0, result.length - n);
        },
        print: function () {
            console.log(result);
        }
    }
}

let firstZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);
firstZero.print();