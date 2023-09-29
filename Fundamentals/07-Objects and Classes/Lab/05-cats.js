function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log((`${this.name}, age ${this.age} says Meow`));
        }
    }

    for (let cat of arr) {
        let [name, age] = cat.split(" ");
        let tempCat = new Cat(name, age);
        tempCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);