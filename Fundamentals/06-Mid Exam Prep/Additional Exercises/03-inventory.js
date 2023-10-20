function inventory(data) {

    let index = 0;
    let journal = data[index];
    index++;
    let command = data[index];
    index++;
    let journalArr = journal.split(", ");

    while (command !== "Craft!") {
        let actionArr = command.split(" - ");
        let action = actionArr[0];
        let item = actionArr[1];
        let includesItem = journalArr.includes(item);

        switch (action) {

            case "Collect":
                if (!includesItem) {
                    journalArr.push(item);
                }
                break;

            case "Drop":
                if (includesItem) {
                    journalArr.splice(journalArr.indexOf(item), 1);
                }
                break;

            case "Combine Items":
                let items = item.split(":");
                if (journalArr.includes(items[0])) {
                    journalArr.splice(journalArr.indexOf(items[0]) + 1, 0, items[1]);
                }
                break;

            case "Renew":
                if (includesItem) {
                    let slicedItem = journalArr.splice(journalArr.indexOf(item), 1);
                    journalArr.push(slicedItem);
                }
                break;
        }

        command = data[index];
        index++;
    }

    console.log(journalArr.join(", "));
}

inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);  