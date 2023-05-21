function sortNumbers(num1, num2, num3) {

    let numbers = [num1, num2, num3];
    
    numbers.sort();
    numbers.reverse();
    numbers.forEach(element => { console.log(element); });

}

sortNumbers(2, 1, 3);