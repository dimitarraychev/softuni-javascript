function coffeeLover(commands) {

    let list = commands.shift().split(' ');
    let commandsCount = commands.shift();

    for (let i = 0; i < commandsCount; i++) {
        let currCommand = commands[i].split(' ');
        let action = currCommand[0];

        switch (action) {

            case "Include":
                let coffee = currCommand[1];
                list.push(coffee);
                break;

            case "Remove":
                let position = currCommand[1];
                let num = currCommand[2];

                if (list.length < num) {
                    break;
                }

                if (position === 'first') {
                    list.splice(0, num)
                } else {
                    list.splice(-num, num);
                }
                break;

            case "Prefer":
                let index1 = currCommand[1];
                let index2 = currCommand[2];

                if (index1 < list.length && index2 < list.length) {
                    let temp = list[index1];
                    list[index1] = list[index2];
                    list[index2] = temp;
                }
                break;

            case "Reverse":
                list.reverse();
                break;
        }
    }

    console.log("Coffees:");
    console.log(list.join(' '));
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);