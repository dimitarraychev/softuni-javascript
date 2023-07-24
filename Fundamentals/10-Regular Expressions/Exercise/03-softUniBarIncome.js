function softUniBarIncome(arr) {

    const regex = /\%(?<name>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<qty>\d+)\|(?<price>\d+\.?\d*)\$/;

    let totalIncome = 0;

    for (const line of arr) {
        let result = line.match(regex);

        if (result) {
            let name = result.groups.name;
            let product = result.groups.product;
            let qty = +result.groups.qty;
            let price = +result.groups.price;
            let totalPrice = price * qty;

            totalIncome += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log('Total income: ' + totalIncome.toFixed(2));
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);