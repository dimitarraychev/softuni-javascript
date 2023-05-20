function yardLandscaping(input) {

    let squareMeters = Number(input[0]);
    let totalPrice = squareMeters * 7.61;
    let discount = 0.18 * totalPrice;
    let priceWithDiscount = totalPrice - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
}

yardLandscaping(["150"]);