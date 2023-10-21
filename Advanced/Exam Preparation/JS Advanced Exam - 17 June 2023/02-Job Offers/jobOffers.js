class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let output = [];

        for (const candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split('-');
            let isPresent = false;

            if (this.jobCandidates.length > 0) {
                for (const person of this.jobCandidates) {

                    if (person.name === name) {
                        isPresent = true;

                        if (Number(yearsExperience) > Number(person.yearsExperience)) {
                            person.yearsExperience = Number(yearsExperience);
                        }
                    }
                }
            }

            if (!isPresent) {
                const personObj = { name, education, yearsExperience: Number(yearsExperience) };
                this.jobCandidates.push(personObj);
                output.push(name);
            }
        }

        return `You successfully added candidates: ${output.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minExp] = chosenPerson.split('-');

        for (const candidate of this.jobCandidates) {

            if (candidate.name === name && Number(candidate.yearsExperience) < Number(minExp)) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`);

            } else if (candidate.name === name && Number(candidate.yearsExperience) >= Number(minExp)) {
                candidate.yearsExperience = 'hired';
                return `Welcome aboard, our newest employee is ${name}.`;
            }
        }

        throw new Error(`${name} is not in the candidates list!`);
    }

    salaryBonus(name) {

        for (const candidate of this.jobCandidates) {

            if (candidate.name === name) {

                if (candidate.education === 'Bachelor') {
                    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
                }

                if (candidate.education === 'Master') {
                    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
                }

                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
            }
        }

        throw new Error(`${name} is not in the candidates list!`);
    }

    candidatesDatabase() {

        if (this.jobCandidates.length < 1) throw new Error('Candidate Database is empty!');

        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        let output = [];

        for (const candidate of sortedCandidates) {
            output.push(`${candidate.name}-${candidate.yearsExperience}`);
        }

        return 'Candidates list:\n' + `${output.join('\n')}`;
    }
}

let Jobs = new JobOffers('Google', 'Strategy Analyst');
console.log(Jobs.jobApplication(['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Daniel Jones-asd-18', 'Daniel Jones-Bachelor-20']));
console.log(Jobs.jobOffer('John Doe-8'));
console.log(Jobs.jobOffer('Peter Parker-4'));
console.log(Jobs.salaryBonus('John Doe'));
console.log(Jobs.salaryBonus('Peter Parker'));
console.log(Jobs.salaryBonus('Daniel Jones'));

console.log(Jobs.candidatesDatabase());