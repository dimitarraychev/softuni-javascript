function lowestPricesInCities(inputArr) {

    let productsObj = {};

    for (const row of inputArr) {
        let [town, product, price] = row.split(' | ');

        if (!productsObj.hasOwnProperty(product)) {            
            productsObj[product] = {
                price: Number(price),
                town
            };

        } else {
            if (Number(price) < productsObj[product].price) {
                productsObj[product].price = Number(price);
                productsObj[product].town = town;
            }
        }
    }

    for (const key in productsObj) {
        console.log(`${key} -> ${productsObj[key].price} (${productsObj[key].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);