function rightPlace(str, char, result) {
    let replaced = str.replace('_', char);
    let output = replaced === result ? 'Matched' : 'Not matched';
    console.log(output);
}
rightPlace('Str_ng', 'o', 'Strong');