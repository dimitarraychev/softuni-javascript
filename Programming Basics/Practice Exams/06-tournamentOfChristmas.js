function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalMoney = 0; 
    let dayW = 0;
    let dayL = 0;

    for (let i = 1; i <= days; i++) {
        let command = input[index];
        index++;
        let wins = 0;
        let losses = 0;
        let money = 0;

        while (command !== "Finish") {
            let sport = command;
            let result = input[index];
            index++;
 
            if (result === "win") {
                wins++;
                money += 20;
            } else {
                losses++;
            }
            command = input[index];
            index++;
        }

        

        if (wins > losses) {
            dayW++;
            totalMoney += money * 1.1;
        } else {
            dayL++;
            totalMoney += money;
        }

    }

    if (dayW > dayL) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);