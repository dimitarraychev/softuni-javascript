function messagesManager(input) {

    let capacity = +input.shift();
    let messagesObj = {};

    for (const line of input) {

        if (line === "Statistics") {
            break;
        }

        let [command, name, data1, data2] = line.split('=');

        switch (command) {

            case 'Add':
                let sent = +data1;
                let received = +data2;

                if (!messagesObj.hasOwnProperty(name)) {
                    messagesObj[name] = {
                        sent,
                        received
                    };
                }
                break;

            case 'Message':
                let receiver = data1;

                if (messagesObj.hasOwnProperty(name) && messagesObj.hasOwnProperty(receiver)) {
                    messagesObj[name].sent++;
                    messagesObj[receiver].received++;

                    if (messagesObj[name].sent + messagesObj[name].received >= capacity) {
                        delete messagesObj[name];
                        console.log(`${name} reached the capacity!`);
                    }

                    if (messagesObj[receiver].sent + messagesObj[receiver].received >= capacity) {
                        delete messagesObj[receiver];
                        console.log(`${receiver} reached the capacity!`);
                    }
                }

                break;

            case 'Empty':

                if (messagesObj.hasOwnProperty(name)) {
                    delete messagesObj[name];
                } else if (name === 'All') {
                    messagesObj = {};
                }
                break;
        }
    }

    let keys = Object.keys(messagesObj);

    if (keys.length > 0) {
        console.log("Users count: " + keys.length);

        for (const key of keys) {
            let totalMessages = messagesObj[key].sent + messagesObj[key].received;
            console.log(`${key} - ${totalMessages}`);
        }

    } else {
        console.log("Users count: 0");
    }
}

messagesManager(['20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics']);