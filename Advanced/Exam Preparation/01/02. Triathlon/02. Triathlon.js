class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) return `${participantName} has already been added to the list`;

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) return `${participantName} is not in the current participants list`;
        if (condition < 30) throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        if (condition < 90) return `${participantName} could only complete ${Math.trunc(condition / 30)} of the disciplines`;

        let participantGender = this.participants[participantName];
        this.listOfFinalists.push({ participantName, participantGender });

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {

        let isPresent = false;

        for (const finalist of this.listOfFinalists) {
            if (finalist['participantName'] === participantName) {
                isPresent = true;
                break;
            }
        }

        if (!isPresent) return `${participantName} is not in the current finalists list`;

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {

        if (this.listOfFinalists.length < 1) return `There are no finalists in this competition`;

        if (criteria === 'all') {
            let result = [`List of all ${this.competitionName} finalists:`];

            this.listOfFinalists.forEach(f => result.push(f['participantName']));

            return result.join('\n');
        }

        for (const finalist of this.listOfFinalists) {
            if (finalist['participantGender'] === criteria) {
                return `${finalist['participantName']} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));