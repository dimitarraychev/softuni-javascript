function areaOfFigures(input) {

    let type = input[0];
    let result = 0;

    if (type === "square") {
            let side = Number(input[1]);
            result = side * side;
        } else if (type === "rectangle") {
            let sideA = Number(input[1]);
            let sideB = Number(input[2]);
            result = sideA * sideB;
        } else if (type === "circle") {
            let r = Number(input[1]);
            result = Math.PI * Math.pow(r, 2);
        } else {
            let sideA = Number(input[1]);
            let h = Number(input[2]);
            result = (sideA * h) / 2;
           }

    console.log(result.toFixed(3));

}
areaOfFigures(["triangle", "4.5", "20"]);