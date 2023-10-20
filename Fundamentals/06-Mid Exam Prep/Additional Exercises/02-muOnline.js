function muOnline(str) {

    let health = 100;
    let bitcoin = 0;
    let isAlive = true;

    let arr = str.split("|");

    for (let i = 0; i < arr.length; i++) {
        let room = arr[i].split(" ");
        let command = room[0];
        let num = Number(room[1]);

        switch (command) {

            case "potion":
                let oldHealth = health;
                health += num;

                if (health > 100) {
                    health = 100;
                }

                console.log(`You healed for ${health - oldHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                bitcoin += num;
                console.log(`You found ${num} bitcoins.`);
                break;

            default:
                let monster = command;
                health -= num;
                
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i + 1}`);
                    isAlive = false;
                }
                break;
        }

        if (!isAlive) {
            break;
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");