function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;

        if (i < 10) {
            sum = i;
        } else {
            iToStr = i.toString();
            sum = Number(iToStr[0]) + Number(iToStr[1]);
        }   

        let output = sum === 5 || sum === 7 || sum === 11 ? 'True' : 'False';
        console.log(`${i} -> ${output}`);
    }
}
specialNumbers(15);