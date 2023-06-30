function movies(commandsArr) {

    let moviesArr = [];

    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i];

        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];

            let movieObj = {
                name: movieName
            }

            moviesArr.push(movieObj);
        }

        if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');

            for (const movie of moviesArr) {
                if (movie['name'] == movieName) {
                    movie['director'] = director;
                }
            }
        }

        if (command.includes("onDate")) {
            let [movieName, date] = command.split(' onDate ');

            for (const movie of moviesArr) {
                if (movie['name'] == movieName) {
                    movie['date'] = date;
                }
            }
        }
    }

    moviesArr.forEach(element => {
        if (element['name'] && element['date'] && element['director']) {
            console.log(JSON.stringify(element));
        }
    });
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);