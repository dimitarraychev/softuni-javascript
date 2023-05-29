function commonElements(arr1, arr2) {

    let length = arr1.length;

    for (let i = 0; i < length; i++) {

        let element = arr1[i];

        if (arr2.includes(element)) {
            console.log(element);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']); 