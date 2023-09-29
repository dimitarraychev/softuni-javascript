function daysInAMonth(month, year) {

    let date = new Date(year, month);
    let lastDay = date.setDate(0);

    console.log(date.getDate());
}

daysInAMonth(1, 2012);