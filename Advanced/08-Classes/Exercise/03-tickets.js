function tickets(inputArr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number.parseFloat(price);
            this.status = status;
        }
    }

    let ticketsArr = [];

    for (const line of inputArr) {
        const [destination, price, status] = line.split('|');
        const ticket = new Ticket(destination, price, status);
        ticketsArr.push(ticket);
    }

    return ticketsArr.sort((a, b) => {
        return sortCriteria === 'price' ? a[sortCriteria] - b[sortCriteria] : a[sortCriteria].localeCompare(b[sortCriteria]);
    });
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));