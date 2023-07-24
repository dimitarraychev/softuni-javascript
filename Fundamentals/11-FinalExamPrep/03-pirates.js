function pirates(data) {

    let targets = {};

    let i = 0;
    let line = data[i];
    i++;

    while (line !== "Sail") {
        let [name, population, gold] = line.split("||");

        if (!targets.hasOwnProperty(name)) {
            targets[name] = {
                population: Number(population),
                gold: Number(gold)
            };
        } else {
            targets[name].population += +population;
            targets[name].gold += +gold;
        }

        line = data[i];
        i++;
    }

    if (line === "Sail") {
        line = data[i];
        i++;
    }

    while (line !== "End") {
        let command = line.split("=>");
        let action = command[0];
        let name = command[1];
        let gold;

        switch (action) {
            case "Plunder":
                let population = Number(command[2]);
                gold = Number(command[3]);

                targets[name].population -= population;
                targets[name].gold -= gold;

                if (targets[name].population <= 0 || targets[name].gold <= 0) {
                    delete targets[name];
                    console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                    console.log(`${name} has been wiped off the map!`);
                } else {
                    console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                }
                break;

            case "Prosper":
                gold = Number(command[2]);

                if (gold >= 0) {
                    targets[name].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${name} now has ${targets[name].gold} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }

        line = data[i];
        i++;
    }

    if (targets) {
        console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`);

        for (const key in targets) {
            console.log(`${key} -> Population: ${targets[key].population} citizens, Gold: ${targets[key].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));