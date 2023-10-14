(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this.toString() + str;
    }

    String.prototype.isEmpty = function () {
        return this.toString() === '' ? true : false;
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString();
        if (n < 4) return '.'.repeat(n);

        if (this.includes(' ')) {
            let wordsArr = this.split(' ');
            let result = [];

            for (const word of wordsArr) {
                if (result.join(' ').length + word.length + 3 <= n) {
                    result.push(word);
                } else {
                    return result.join(' ') + '...';
                }
            }

        } else {
            return this.substring(0, n - 3) + '...';
        }
    }

    String.format = function (str, ...params) {

        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }

        return str;
    }
})()

let str = 'my string';
str = str.ensureStart('my');
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
console.log(str);