class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        let newEmployee = { name, salary, position };
        this.departments[department].push(newEmployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = { department: '', avgSalary: 0 };

        for (const department in this.departments) {
            let avgSalary = 0;

            for (const employee of this.departments[department]) {
                avgSalary += employee.salary;
            };

            avgSalary /= this.departments[department].length;

            if (avgSalary > bestDepartment.avgSalary) {
                bestDepartment.department = department;
                bestDepartment.avgSalary = avgSalary;
            }
        }

        let result = [`Best Department is: ${bestDepartment.department}`,
        `Average salary: ${bestDepartment.avgSalary.toFixed(2)}`];

        let sortedEmployees = this.departments[bestDepartment.department].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        for (const emp of sortedEmployees) {
            result.push(`${emp.name} ${emp.salary} ${emp.position}`);
        }

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());