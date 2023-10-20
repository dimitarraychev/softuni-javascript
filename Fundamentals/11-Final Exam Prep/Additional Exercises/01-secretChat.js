function secretChat(input) {

    let message = input.shift();
    let isError = false;

    let parserObject = {

        'InsertSpace': (message, index) => {
            let firstHalf = message.substring(0, index);
            let secondHalf = message.substring(index);
            return firstHalf + ' ' + secondHalf;
        },

        'Reverse': (message, substring) => {
            if (message.includes(substring)) {
                message = message.replace(substring, '');
                let reversedSubstr = substring.split('').reverse().join('');
                return message + reversedSubstr;
            }

            isError = true;
            return message;
        },

        'ChangeAll': (message, substring, replacement) => {
            message = message.replace(new RegExp(substring, 'g'), replacement);
            return message;
        }
    };

    for (const line of input) {

        if (line === 'Reveal') {
            break;
        }

        let [command, ...tokens] = line.split(':|:');

        message = parserObject[command](message, ...tokens);
        if (!isError) {
            console.log(message);
        } else {
            console.log('error');
        }
    }

    console.log("You have a new text message: " + message);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);