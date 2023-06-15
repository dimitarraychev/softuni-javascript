function shoppingList(arr) {

    let commandsArr = arr.splice(0);
    let list = commandsArr.shift().split('!');

    let index = 0;
    let commands = commandsArr[index];
    index++;

    while (commands !== 'Go Shopping!') {
        let command = commands.split(' ')
        let action = command[0];
        let item = command[1];
        let itemIndex = list.indexOf(item);

        switch (action) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case "Unnecessary":
                if (list.includes(item)) {
                    list.splice(itemIndex, 1);
                }
                break;
            case "Correct":
                let newItem = command[2];
                if (list.includes(item)) {
                    list.splice(itemIndex, 1, newItem);
                }
                break;
            case "Rearrange":
                if (list.includes(item)) {
                    let itemToMove = list.splice(itemIndex, 1);
                    list.push(itemToMove);
                }
                break;
        }

        commands = commandsArr[index];
        index++;
    }

    console.log(list.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);