function ticTacToe(movesArr) {

    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let inputLength = movesArr.length;
    let isWon = false;
    let playerTurn = 0;

    for (let index = 0; index < inputLength; index++) {
        const [x, y] = movesArr[index].split(' ');

        let mark;
        playerTurn % 2 === 0 ? mark = 'X' : mark = 'O';

        let errorMessage = 'This place is already taken. Please choose another!';

        if (dashboard[x][y] === false) {
            dashboard[x][y] = mark;
            playerTurn++;
        } else {
            console.log(errorMessage);
            continue;
        }

        let diag1 = '';
        let diag2 = '';
        let buffer = 2;

        for (let j = 0; j < 3; j++) {
            let row = dashboard[j];

            if (row.every(x => x === 'X')) {
                console.log('Player X wins!');
                isWon = true;
                break;
            } else if (row.every(x => x === 'O')) {
                console.log('Player O wins!');
                isWon = true;
                break;
            }

            diag1 += row[j];
            diag2 += row[buffer];
            buffer--;
        }

        if (diag1 === 'XXX' || diag2 === 'XXX' && isWon === false) {
            console.log('Player X wins!');
            isWon = true;
            break;
        } else if (diag1 === 'OOO' || diag2 === 'OOO' && isWon === false) {
            console.log('Player O wins!');
            isWon = true;
            break;
        }

        let isFull = 0;

        for (const arr of dashboard) {
            if (!arr.includes(false)) {
                isFull++;
            } else {
                isFull = 0;
                break;
            }
        }

        if (isFull === 3 && isWon === false) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        if (isWon === true) {
            break;
        }
    }

    dashboard.forEach(row => console.log(row.join('\t')));
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);