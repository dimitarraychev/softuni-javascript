function theAngryCat(items, entry, price) {

    let sumLeft = 0;
    let sumRigth = 0;

    for (let i = 0; i < entry; i++) {

        switch (price) {

            case "cheap":
                if (items[i] < items[entry]) {
                    sumLeft += items[i];
                }
                break;

            case "expensive":
                if (items[i] >= items[entry]) {
                    sumLeft += items[i];
                }
                break;
        }
    }

    for (let j = entry + 1; j < items.length; j++) {

        switch (price) {

            case "cheap":
                if (items[j] < items[entry]) {
                    sumRigth += items[j];
                }
                break;

            case "expensive":
                if (items[j] >= items[entry]) {
                    sumRigth += items[j];
                }
                break;
        }
    }

    if (sumLeft >= sumRigth) {
        console.log(`Left - ${sumLeft}`);
    } else {
        console.log(`Right - ${sumRigth}`);
    }
}

theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");