function suppliesForSchool(input) {
    let penPacketsCount = Number(input[0]);
    let markerPacketsCount = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let totalPensPrice = penPacketsCount * 5.80;
    let totalMarkersPrice = markerPacketsCount * 7.20;
    let totalDetergentPrice = detergentLiters * 1.20;

    let totalPrice = totalPensPrice + totalMarkersPrice + totalDetergentPrice;
    let discount = discountPercent * totalPrice;
    let priceAfterDiscount = totalPrice - discount;
console.log(priceAfterDiscount);
}

suppliesForSchool(["2", "3", "4", "25"]);