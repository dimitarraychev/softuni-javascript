function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let totalPrice = dogFood * 2.5 + catFood * 4;

    console.log(`${totalPrice} lv.`);
}

petShop(["5", "4"]);