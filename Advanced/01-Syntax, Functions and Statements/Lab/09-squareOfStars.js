function squareofStars(num) {

    if (num) {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num).trimEnd());
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5).trimEnd());
        }
    }
}

squareofStars(2);