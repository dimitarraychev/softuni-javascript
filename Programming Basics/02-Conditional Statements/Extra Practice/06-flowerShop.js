function flowerShop(input) {
    let magnolia = Number(input[0]) * 3.25;
    let hyacinth = Number(input[1]) * 4;
    let rose = Number(input[2]) * 3.50;
    let cactus = Number(input[3])  * 8;
    let presentPrice = Number(input[4]);

    let totalEarned = (magnolia + hyacinth + rose + cactus) * 0.95;

    if (totalEarned >= presentPrice) {
        let left = totalEarned - presentPrice;
        console.log(`She is left with ${Math.floor(left)} leva.`);
    } else {
        let needed = presentPrice - totalEarned;
        console.log(`She will have to borrow ${Math.ceil(needed)} leva.`); 
    }

}

flowerShop(["2", "3", "5", "1", "50"]);