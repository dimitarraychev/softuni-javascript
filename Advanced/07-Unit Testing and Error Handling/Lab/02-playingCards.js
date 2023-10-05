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

let myCard = playingCards('A', 'S');
console.log(myCard.toString());