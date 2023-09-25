function sumTable() {

    let rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let index = 1; index < rows.length; index++) {
        let columns = rows[index].children;
        let cost = columns[columns.length - 1].textContent;
        sum += Number(cost);        
    }

    document.getElementById('sum').textContent = sum;
}