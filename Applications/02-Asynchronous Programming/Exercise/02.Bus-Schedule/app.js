function solve() {
    const infoField = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const baseURI = 'http://localhost:3030/jsonstore/bus/schedule';
    let id = 'depot';
    let uri = baseURI + '/' + id;
    let currStop = '';

    async function depart() {
        try {
            const response = await fetch(uri);
            const data = await response.json();

            currStop = data.name
            infoField.textContent = `Next stop ${currStop}`;
            id = data.next;
            uri = baseURI + '/' + id;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (e) {
            infoField.textContent = 'Error';
        }
    }

    function arrive() {
        infoField.textContent = `Arriving at ${currStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();