function deckOfCards(cardsArr) {

    let result = [];

    for (const card of cardsArr) {
        let face;
        let suit;

        if (card.length < 3) {
            [face, suit] = card.split('');
        } else {
            let currCard = card.split('');
            face = `${currCard[0]}${currCard[1]}`;
            suit = currCard[2];
        }

        try {
            let cardObj = playingCards(face, suit);
        } catch (ex) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        result.push(cardObj.toString());
    }

    console.log(result.join(' '));

    function playingCards(face, suit) {

        const facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitsObj = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!facesArr.includes(face)) throw new Error('Invalid card face!');
        if (!suitsObj.hasOwnProperty(suit)) throw new Error('Invalid card suit!');

        return cardObj = {
            face,
            suit,
            toString: () => { return `${face}${suitsObj[suit]}` }
        };
    }
}

deckOfCards(['5S', '3D', 'QD', '1C']);
console.log('---------------');
deckOfCards(['AS', '10D', 'KH', '2C']);