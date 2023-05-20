function requiredReading(pages, pagesPerHour, days) {

    let totalHours = pages / pagesPerHour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);

}

requiredReading(212, 20, 2);