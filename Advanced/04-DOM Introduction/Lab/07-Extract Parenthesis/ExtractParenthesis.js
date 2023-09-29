function extract(content) {

    const elementText = document.getElementById(content).textContent;
    const regex = /(?<=\()[\w\s]+(?=\))/gm;

    let match = elementText.match(regex);
    let text = match.join('; ');

    return text;
}