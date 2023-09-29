function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18 && day !== "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }

}

workingHours(["12", "Sunday"]);