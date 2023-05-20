function vacation(input) {

    let index = 0;
    let price = Number(input[index]);
    index++;
    let availabeMoney = Number(input[index]);
    index++;

    let spendCounter = 0;
    let totalDays = 0;

    while (availabeMoney < price) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;
        totalDays++;

        if (action === "save") {
            availabeMoney += sum
            spendCounter = 0;
        } else if (action === "spend") {
            if (sum > availabeMoney) {
                availabeMoney = 0;
            } else {
                availabeMoney -= sum;
            }
            spendCounter++;
        }

        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }

    }

    if (availabeMoney >= price) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);
