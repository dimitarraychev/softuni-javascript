function extractText() {

    const items = document.querySelectorAll('#items li');
    const result = document.querySelector('#result');

    for (let item of items) {
        result.value += item.textContent + '\n';
    }
}