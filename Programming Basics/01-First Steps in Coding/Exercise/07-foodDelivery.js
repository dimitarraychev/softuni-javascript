function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.40;
    let vegPrice = vegMenus * 8.15;

    let totalMenuPrice = chickenPrice + fishPrice + vegPrice;
    let dessertPrice = 0.2 * totalMenuPrice

    let priceWithDessert = totalMenuPrice + dessertPrice;
    let priceWithDelivery = priceWithDessert + 2.5;

    console.log(priceWithDelivery);
}

foodDelivery(["2", "4", "3"])