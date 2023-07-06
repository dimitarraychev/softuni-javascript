function cardGame(input) {

    let faceCards = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };

    let cardTypes = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    };

    let peopleObj = {};

    for (const line of input) {
        let [name, draw] = line.split(': ');

        if (!peopleObj.hasOwnProperty(name)) {
            peopleObj[name] = draw;
        } else {
            peopleObj[name] += `, ${draw}`;
        }
    }

    for (const key in peopleObj) {
        let cards = peopleObj[key].split(', ');
        let filteredCards = cards.filter((card, index) => cards.indexOf(card) === index);
        peopleObj[key] = filteredCards;

        let totalValue = 0;

        for (const card of filteredCards) {
            let [value, type, newType] = card.split('');
            let cardValue = 0;

            if (faceCards.hasOwnProperty(value)) {
                cardValue = faceCards[value] * cardTypes[type];
            } else {
                if (newType) {
                    cardValue = 10 * cardTypes[newType];
                } else {
                    cardValue = value * cardTypes[type];
                }
            }

            totalValue += cardValue;
        }

        peopleObj[key] = totalValue;
    }

    for (const key in peopleObj) {
        console.log(`${key}: ${peopleObj[key]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);