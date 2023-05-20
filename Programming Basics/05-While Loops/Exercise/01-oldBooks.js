function oldBooks(input) {

    let index = 0;
    let favBook = input[index];
    index++;
    let bookCounter = 0;
    let command = input[index];
    index++;
    let isFound = false;

    while (command !== "No More Books") {
        let currBook = command;
        if (favBook === currBook) {
            isFound = true;
            break;
        }

        bookCounter++;
        command = input[index];
        index++;
    }

    if (isFound) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }

}

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
