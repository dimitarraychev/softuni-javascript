function wordsUppercase(inputStr) {

    const regex = /\w+/gm

    let match = inputStr.match(regex);
    let result = match.map(element => element.toUpperCase())
        .join(', ');
        
    console.log(result);
}

wordsUppercase('Hi, how are you?');