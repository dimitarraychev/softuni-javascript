function solution() {

    const recipesObj = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    let stockObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function breakfastRobot(str) {

        const [action, token, qty] = str.split(' ');

        const actionsObj = {
            restock: function restock(microelement, qty) {
                stockObj[microelement] += Number(qty);
                return 'Success';
            },
            prepare: function prepare(recipe, qty) {

                let currRecipe = recipesObj[recipe];

                for (const el in currRecipe) {
                    if (stockObj[el] < (currRecipe[el] * Number(qty))) return `Error: not enough ${el} in stock`;
                }

                for (const el in currRecipe) {
                    stockObj[el] -= currRecipe[el] * Number(qty);
                }
                return 'Success';
            },
            report: function report() {
                return `protein=${stockObj.protein} carbohydrate=${stockObj.carbohydrate} fat=${stockObj.fat} flavour=${stockObj.flavour}`;
            }
        }

        return actionsObj[action](token, qty);
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("restock carbohydrate 50")); // Success
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock