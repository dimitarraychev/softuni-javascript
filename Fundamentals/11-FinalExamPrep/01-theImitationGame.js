function theImitationGame(input) {

    let message = input.shift();

    let i = 0;
    let line = input[i];
    i++;

    while (line !== 'Decode') {

        let command = line.split('|');
        let action = command[0];

        switch (action) {
            case 'Move':
                let n = +command[1];
                let firstLetters = message.substring(0, n);
                let lastLetters = message.substring(n);
                message = lastLetters + firstLetters;
                break;

            case 'Insert':
                let index = +command[1];
                let value = command[2];
                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                message = firstPart + value + secondPart;
                break;

            case 'ChangeAll':
                let letter = command[1];
                let replacement = command[2];
                message = message.split(letter).join(replacement);
                break;
        }

        line = input[i];
        i++;
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);