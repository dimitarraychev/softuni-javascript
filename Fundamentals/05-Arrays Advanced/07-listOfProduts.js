function listOfProduts(arr) {

    let sortList = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${sortList[i]}`);
    }
}

listOfProduts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);