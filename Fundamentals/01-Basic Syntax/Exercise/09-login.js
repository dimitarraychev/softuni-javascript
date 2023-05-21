function login(input) {

    let index = 0;
    let username = input[index];
    index++;
    let guess = input[index];
    index++;

    let isBlocked = false;
    let tries = 0;
    let pass = username.split("").reverse().join("");

    while (guess !== pass) {
        tries++;

        if (tries === 4) {
            isBlocked = true;
            break;
        }

        console.log("Incorrect password. Try again.");
        
        guess = input[index];
        index++;
    }

    if (isBlocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);