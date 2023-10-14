function result() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            this.tasks.push(currTask);
            console.log(currTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.dividend ? this.salary + this.dividend : this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

// const classes = solution();

// const junior = new classes.Junior('Ivan', 25);
// console.log(junior.work());
// console.log(junior.work());
// junior.salary = 5811;
// console.log(junior.collectSalary());

// const sinior = new classes.Senior('Alex', 31);
// console.log(sinior.work());
// console.log(sinior.work());
// console.log(sinior.work());
// console.log(sinior.work());
// sinior.salary = 12050;
// console.log(sinior.collectSalary());

// const manager = new classes.Manager('Tom', 55);
// manager.salary = 15000;
// console.log(manager.collectSalary());
// manager.dividend = 2500;
// console.log(manager.collectSalary());

// result = result();

// var guy1 = new result.Junior('Peter', 27);
// guy1.salary = 1200;
// console.log(guy1.collectSalary());