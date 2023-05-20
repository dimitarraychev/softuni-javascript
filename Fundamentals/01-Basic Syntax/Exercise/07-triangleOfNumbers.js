function triangleOfNumbers(num) {

    for (let rows = 1; rows <= num; rows++) {
        let result = '';

        for (let cols = 1; cols <= rows; cols++) {
            result += `${rows} `;
        }

        console.log(result);
        result = '';
    }

}

triangleOfNumbers(3);