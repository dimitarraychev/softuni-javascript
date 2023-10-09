function getPersons() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let personsArr = [];

    personsArr.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    personsArr.push(new Person('SoftUni'));
    personsArr.push(new Person('Stephan', 'Johnson', 25));
    personsArr.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return personsArr;
}

console.table(getPersons());