function inventory(heroInfo) {

    let heroArr = [];

    for (const hero of heroInfo) {
        let [name, level, items] = hero.split(' / ');

        let heroObj = {
            name,
            level: Number(level),
            items
        }

        heroArr.push(heroObj);
    }

    let sortedArr = heroArr.sort((a, b) => a.level - b.level);

    sortedArr.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    });
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);