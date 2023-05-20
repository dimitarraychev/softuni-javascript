function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let house = (x * x) * 2 - (1.2 * 2) + (x * y) * 2 - (1.5 * 1.5) * 2;
    let roof = (x * y) * 2 + (x * h) * 2;

    console.log(house / 3.4);
    console.log(roof / 4.3);

}

housePainting(["6", "10", "5.2"]);