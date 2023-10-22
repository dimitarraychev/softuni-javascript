class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        const flightObj = { flightNumber, destination, departureTime, price };

        if (this.flights.length > 0) {
            for (const flight of this.flights) {
                if (flight.flightNumber === flightNumber) return `Flight ${flightNumber} to ${destination} is already available.`;
            }
        }

        this.flights.push(flightObj);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {

        let isFound = false;
        for (const flight of this.flights) {
            if (flight.flightNumber === flightNumber) isFound = true;
        }

        if (!isFound) return `Flight ${flightNumber} is not available for booking.`;

        const bookingObj = { passengerName, flightNumber };
        this.bookings.push(bookingObj);
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {

        let isFound = false;
        for (const booking of this.bookings) {
            if (booking.passengerName === passengerName && booking.flightNumber === flightNumber) {

                isFound = true;
                this.bookingsCount--;
                this.bookings = this.bookings.filter(el => el.passengerName !== passengerName && el.flightNumber !== flightNumber);

                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
            }
        }

        if (!isFound) throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }

    showBookings(criteria) {

        if (this.bookings.length < 1) throw new Error('No bookings have been made yet.');

        if (criteria === 'all') {
            let output = [];

            for (const booking of this.bookings) {
                output.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
            }

            return `All bookings(${this.bookingsCount}):\n` + output.join('\n');
        }

        if (criteria === 'cheap') {
            let cheapFlights = [];

            for (const flight of this.flights) {
                if (Number(flight.price) <= 100) {
                    cheapFlights.push(flight.flightNumber);
                }
            }

            let output = [];

            for (const booking of this.bookings) {
                if (cheapFlights.includes(booking.flightNumber)) {
                    output.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
                }
            }

            if (output.length < 1) return 'No cheap bookings found.';

            return 'Cheap bookings:\n' + output.join('\n');
        }

        if (criteria === 'expensive') {
            let expensiveFlights = [];

            for (const flight of this.flights) {
                if (Number(flight.price) > 100) {
                    expensiveFlights.push(flight.flightNumber);
                }
            }

            let output = [];

            for (const booking of this.bookings) {
                if (expensiveFlights.includes(booking.flightNumber)) {
                    output.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
                }
            }

            if (output.length < 1) return 'No expensive bookings found.';

            return 'Expensive bookings:\n' + output.join('\n');
        }
    }
}

const system = new FlightBookingSystem('TravelWorld');
console.log(system.addFlight('AA101', 'Los Angeles', '09:00 AM', 25));
console.log(system.addFlight('BB202', 'New York', '10:30 AM', 101));
console.log(system.bookFlight('Alice', 'AA101'));
console.log(system.bookFlight('Bob', 'BB202'));
console.log(system.cancelBooking('Bob', 'BB202'));
console.log(system.showBookings('expensive'));