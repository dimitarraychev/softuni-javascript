class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let output = [];

        for (const player of footballPlayers) {
            const [name, age, playerValue] = player.split('/');

            let isInvited = false;

            this.invitedPlayers.forEach(invited => {
                if (invited.name === name) {
                    isInvited = true;
                    if (playerValue > invited.playerValue) invited.playerValue = playerValue;
                }
            });

            if (!isInvited) {
                let playerObj = { name, age, playerValue };
                this.invitedPlayers.push(playerObj);
                output.push(name);
            }
        }

        return 'You successfully invite ' + output.join(', ') + '.';
    }

    signContract(selectedPlayer) {

        const [name, playerOffer] = selectedPlayer.split('/');
        let isInvited = false;

        this.invitedPlayers.forEach(invited => {
            if (invited.name === name) {
                isInvited = true;

                if (Number(playerOffer) < invited.playerValue) {
                    let priceDifference = invited.playerValue - Number(playerOffer);
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
                } else {
                    invited.playerValue = 'Bought';
                }
            }
        });

        if (isInvited) return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
        if (!isInvited) throw new Error(`${name} is not invited to the selection list!`);
    }

    ageLimit(name, age) {
        let isInvited = false;

        for (const invited of this.invitedPlayers) {
            if (invited.name === name) {
                isInvited = true;

                if (invited.age < age) {
                    const ageDifference = age - invited.age;

                    if (ageDifference < 5) {
                        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                    } else {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                    }
                }
            }
        }

        if (isInvited) return `${name} is above age limit!`;
        if (!isInvited) throw new Error(`${name} is not invited to the selection list!`);
    }

    transferWindowResult() {
        let output = [];
        const sortedArr = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        sortedArr.forEach(player => output.push(`Player ${player.name}-${player.playerValue}`));

        return 'Players list:\n' + output.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());