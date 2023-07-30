function plantDiscovery(input) {

    let plants = {};
    let plantsQty = +input.shift();

    for (i = 0; i < plantsQty; i++) {
        let [name, rarity] = input.shift().split('<->');
        let rating = 0;
        let ratingsCount = 0;

        plants[name] = {
            rarity,
            rating,
            ratingsCount
        };
    }

    let line = input.shift();

    while (line !== 'Exhibition') {

        let [action, info] = line.split(': ');
        let [name, token] = info.split(' - ');

        if(plants.hasOwnProperty(name)) {
            switch (action) {
                case 'Rate':
                       plants[name].rating += +token;
                       plants[name].ratingsCount++;
                    break;
    
                case 'Update':
                        plants[name].rarity = token;
                    break;
    
                case 'Reset':
                        plants[name].rating = 0;
                        plants[name].ratingsCount = 0;
                    break;
            }
        } else {
            console.log('error');
        }

        line = input.shift();
    }

    console.log("Plants for the exhibition:");

    for (const line in plants) {
        let totalRating = plants[line].rating / plants[line].ratingsCount || 0;     
        let currRarity = plants[line].rarity;

        console.log(` - ${line}; Rarity: ${currRarity}; Rating: ${(totalRating).toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);