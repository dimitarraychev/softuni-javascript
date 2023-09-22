function aggregateElements(arr) {

    let sum = arr => {
        let total = 0;
        arr.forEach(element => {
            total += +element;
        });
        return total;
    }

    let sumPart = arr => {
        let total = 0;
        arr.forEach(element => {
            total += 1 / +element;
        });
        return total;
    }

    let concat = arr => {
        let result = '';
        arr.forEach(element => {
            result += element;
        });
        return result;
    }

    console.log(sum(arr));
    console.log(sumPart(arr));
    console.log(concat(arr));
}

aggregateElements([1, 2, 3]);