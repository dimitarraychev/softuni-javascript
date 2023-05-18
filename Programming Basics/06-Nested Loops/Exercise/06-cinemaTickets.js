function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let movie = command;
        let freeSeats = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;
        let takenSeats = 0;

        while (command1 !== "End") {
            let ticketType = command1;
            takenSeats++;

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            if (takenSeats === freeSeats) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentTaken = (takenSeats / freeSeats) * 100;
        console.log(`${movie} - ${percentTaken.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
