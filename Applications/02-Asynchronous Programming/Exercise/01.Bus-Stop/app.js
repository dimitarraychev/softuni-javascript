async function getInfo() {
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    const stopID = document.getElementById('stopId');
    const baseURI = 'http://localhost:3030/jsonstore/bus/businfo';
    const uri = baseURI + '/' + stopID.value;

    try {
        const response = await fetch(uri);
        const data = await response.json();

        stopID.value = '';
        busesList.innerHTML = '';

        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(el => {
            createListItem(el[0], el[1]);
        });

    } catch (e) {
        stopName.textContent = 'Error';
    }

    function createListItem(num, min) {
        let li = document.createElement('li');
        li.textContent = `Bus ${num} arrives in ${min} minutes`;
        busesList.appendChild(li);
    }
}