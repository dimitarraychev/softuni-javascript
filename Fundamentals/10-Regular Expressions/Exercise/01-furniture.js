function furniture(arr) {

    const regex = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    let totalPrice = 0;

    console.log('Bought furniture:');

    for (el of arr) {
        let result = el.match(regex);

        if (result) {
            let name = result.groups.name;
            let price = +result.groups.price;
            let qty = +result.groups.qty;

            totalPrice += price * qty;
            console.log(name);
        }
    }

    console.log('Total money spend: ' + totalPrice.toFixed(2));
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);