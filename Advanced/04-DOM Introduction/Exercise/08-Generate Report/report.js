function generateReport() {

    const checks = document.querySelectorAll('input');
    const rows = document.querySelectorAll('tbody tr');
    const headings = document.querySelectorAll('thead tr th');
    const resultArea = document.getElementById('output');

    let indexesArr = [];
    let result = [];

    let i = 0;
    for (const check of checks) {
        if (check.checked) {
            indexesArr.push(i);
        }
        i++;
    }

    for (const row of rows) {
        let rowArr = Array.from(row.querySelectorAll('td'));
        let obj = {};

        for (const index of indexesArr) {
            let value = rowArr[index].textContent;
            let name = headings[index].textContent.toLocaleLowerCase().trim();
            obj[name] = value;
        }

        result.push(obj);
    }

    resultArea.value = JSON.stringify(result);
}