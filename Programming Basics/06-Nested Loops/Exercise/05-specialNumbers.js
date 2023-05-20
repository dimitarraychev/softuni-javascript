function specialNumbers(input) {

    let n = Number(input[0]);
    let specialNumbers = "";

    for (let num = 1111; num <= 9999; num++) {
        let str = String(num);
        let special = 0;

        for (let i = 0; i < 4; i++) {
            let digit = str.charAt(i);
            let div = n / digit;
            
            if ((div - Math.floor(div)) === 0) {
                special++;
            } else {
                break;
            }

            if (special === 4) {
                specialNumbers += num + " ";
            }
        }


    }

    console.log(specialNumbers);

}

specialNumbers(["3"]);