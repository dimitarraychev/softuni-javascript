function sumNumbers(input) {
    let index = 0;
    let num = input[index];
    index++;
    let sum = 0;

    while (sum < num) {
        let currNum = Number(input[index]);
        index++;
        sum += currNum;
    }
    
    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40"]);