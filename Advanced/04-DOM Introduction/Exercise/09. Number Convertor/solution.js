function solve() {
    const selectMenuTo = document.querySelector('#selectMenuTo');
    const convertButton = document.querySelector('button');
    convertButton.addEventListener('click', convert);

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);

    function convert() {
        const numToConvert = document.querySelector('#input').value;
        const result = document.querySelector('#result');
        
        if (selectMenuTo.value === 'binary') {
            result.value = convertToBinary(numToConvert);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result.value = convertToHexadecimal(numToConvert);
        }
    
        function convertToBinary(num) {
            return Number(num).toString(2);
        }
    
        function convertToHexadecimal(num) {
            return Number(num).toString(16).toLocaleUpperCase();
        }
    }
}