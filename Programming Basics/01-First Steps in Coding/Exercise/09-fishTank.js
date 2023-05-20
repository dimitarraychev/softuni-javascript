function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let totalVolume = (length * width * height) / 1000;
    let volumeTaken = percentTaken * totalVolume;
    let freeVolume = totalVolume - volumeTaken;

    console.log(freeVolume);

}

fishTank(["85", "75", "47", "17"]);