function repainting(input) {
    let nylon = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) + 0.1 * Number(input[1])) * 14.50;
    let thinner = Number(input[2]) * 5;
    let hours = Number(input[3]);

    let sum = nylon + paint + thinner + 0.40;
    let payment = (0.3 * sum) * hours;
    
    console.log(sum + payment);
}

repainting(["10", "11", "4", "8"]);