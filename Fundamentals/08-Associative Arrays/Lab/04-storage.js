function storage(dataArr) {

    let myMap = new Map();

    for (const data of dataArr) {
        let [product, qty] = data.split(' ');

        if (myMap.has(product)) {
            myMap.set(product, Number(myMap.get(product)) + Number(qty));
        } else {
            myMap.set(product, qty);
        }
    }

    for (const [product, qty] of myMap) {
        console.log(`${product} -> ${qty}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);