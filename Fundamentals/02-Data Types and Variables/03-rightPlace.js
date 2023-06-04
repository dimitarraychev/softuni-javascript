function rightPlace(str, char, result) {

    let replaced = str.replace('_', char);
    let output = replaced === result ? 'Matched' : 'Not Matched';

    console.log(output);

}

rightPlace('Str_ng', 'o', 'Strong');