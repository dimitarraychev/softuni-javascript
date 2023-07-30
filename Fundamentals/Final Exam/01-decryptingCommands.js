function decryptingCommands(input) {

    let message = input.shift();
    let line = input.shift();

    while (line !== 'Finish') {

        let [command, data1, data2] = line.split(' ');

        switch (command) {
            case 'Replace':
                message = message.replace(new RegExp(data1, 'g'), data2);
                console.log(message);
                break;

            case 'Cut':
                if (!message[data1] || !message[data2]) {
                    console.log('Invalid indices!');
                } else {
                    let firstHalf = message.substring(0, +data1);
                    let secondHalf = message.substring(+data2 + 1);
                    message = firstHalf + secondHalf;
                    console.log(message);
                }
                break;

            case 'Make':
                switch (data1) {
                    case 'Upper':
                        message = message.toUpperCase();
                        break;
                    case 'Lower':
                        message = message.toLowerCase();
                        break;
                }
                console.log(message);
                break;

            case 'Check':
                if (message.includes(data1)) {
                    console.log(`Message contains ${data1}`);
                } else {
                    console.log(`Message doesn't contain ${data1}`);
                }
                break;

            case 'Sum':
                if (!message[data1] || !message[data2]) {
                    console.log('Invalid indices!');
                } else {
                    let messageSubstr = message.substring(data1, +data2 + 1);
                    let substrLength = messageSubstr.length;
                    let sum = 0;

                    for (let i = 0; i < substrLength; i++) {
                        let charAscii = Number(messageSubstr.charCodeAt(i));
                        sum += charAscii;
                    }

                    console.log(sum);
                }
                break;
        }

        line = input.shift();
    }
}

decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"]);