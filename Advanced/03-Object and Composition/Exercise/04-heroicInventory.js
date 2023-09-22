function heroicInventory(inputArr) {

    let resultArr = [];

    for (const row of inputArr) {
        let [name, level, items] = row.split(' / ');

        let heroObj = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        };

        resultArr.push(heroObj);
    }

    return JSON.stringify(resultArr);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));