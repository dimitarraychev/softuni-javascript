function dungeonestDark(arr) {

    let coins = 0;
    let health = 100;
    let isAlive = true;
    let splitArr = arr[0].split("|");
    let roomsWon = 1;

    for (let i = 0; i < splitArr.length; i++) {
        let room = splitArr[i].split(" ");
        let encounter = room[0];
        let points = Number(room[1]);

        if (isAlive) {
            switch (encounter) {
                case "potion":
                    roomsWon++;
                    let newHealth = health + points;

                    if (newHealth > 100) {
                        newHealth = 100;
                    }

                    console.log(`You healed for ${newHealth - health} hp.`);
                    health = newHealth;
                    console.log(`Current health: ${health} hp.`);
                    break;

                case "chest":
                    roomsWon++;
                    coins += points;
                    console.log(`You found ${points} coins.`);
                    break;

                default:
                    health -= points;

                    if (health > 0) {
                        roomsWon++;
                        console.log(`You slayed ${encounter}.`);
                    } else {
                        isAlive = false;
                        console.log(`You died! Killed by ${encounter}.`);
                        console.log(`Best room: ${roomsWon}`);
                    }
                    break;
            }
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

console.log("Run 1:");
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("Run 2:");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);