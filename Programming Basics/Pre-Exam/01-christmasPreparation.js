function christmasPreparation(input) {
    
    let paper = Number(input[0]);
    let fabric = Number(input[1]);
    let glue = Number(input[2]);
    let discountPercent = Number(input[3]);

    let paperPrice = paper * 5.80;
    let fabricPrice = fabric * 7.20;
    let gluePrice = glue * 1.20;
    let totalPrice = (paperPrice + fabricPrice + gluePrice);
    let discount = discountPercent / 100 * totalPrice;
    let price = totalPrice - discount;

    console.log(price.toFixed(3));

}

christmasPreparation(["2",
    "3",
    "2.5",
    "25"]);
