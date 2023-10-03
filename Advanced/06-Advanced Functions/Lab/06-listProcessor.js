function listProcessor(commandsArr) {

    let result = [];

    const commandsObj = {
        add: function (str) {
            result.push(str);
        },
        remove: function (str) {
            result = result.filter((x => x !== str));
        },
        print: function () {
            console.log(result.join(','));
        }
    }

    commandsArr.forEach(command => {
            const [action, value] = command.split(' ');
            return commandsObj[action](value);
    });
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);