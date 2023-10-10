class List {
    constructor() {
        this.list = [];
        this.add = function(element) {
            this.size++;
            this.list.push(element);
            return this.list.sort((a, b) => a - b);
        };
        this.remove = function(index) {
            this.size--;
            return this.list.splice(index, 1);
        };
        this.get = function(index) {
            return this.list[index];
        };
        this.size = 0;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));