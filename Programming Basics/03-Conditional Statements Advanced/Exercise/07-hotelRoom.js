function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);
    
    let priceStudio = 0;
    let priceApt = 0;

    if (month === "May" || month === "October") {
        if (nights <= 7) {
            priceStudio = nights * 50;
            priceApt = nights * 65;
        } else if (nights <= 14) {
            priceStudio = (nights * 50) * 0.95;
            priceApt = nights * 65;
        } else {
            priceStudio = (nights * 50) * 0.7;
            priceApt = (nights * 65) * 0.9;
        }
    } else if (month === "June" || month === "September") {
        if (nights <= 14) {
            priceStudio = nights * 75.20;
            priceApt = nights * 68.70;
        } else {
            priceStudio = (nights * 75.20) * 0.8;
            priceApt = (nights * 68.70) * 0.9;
        }
    } else {
        if (nights <= 14) {
            priceStudio = nights * 76;
            priceApt = nights * 77;
        } else {
            priceStudio = nights * 76;
            priceApt = (nights * 77) * 0.9;
        }
    }

    console.log(`Apartment: ${priceApt.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}

hotelRoom(["May", "15"]);