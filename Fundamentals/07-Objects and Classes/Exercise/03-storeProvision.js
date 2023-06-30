function storeProvision(stockArr, orderArr) {

    let stockObj = {};

    for (let i = 0; i < stockArr.length; i += 2) {
        let product = stockArr[i];
        let qty = Number(stockArr[i + 1]);

        stockObj[product] = qty;
    }

    for (let i = 0; i < orderArr.length; i += 2) {
        let product = orderArr[i];
        let qty = Number(orderArr[i + 1]);

        if (!stockObj.hasOwnProperty(product)) {
            stockObj[product] = 0;
        }

        stockObj[product] += qty;
    }

    for (const key in stockObj) {
        console.log(`${key} -> ${stockObj[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);