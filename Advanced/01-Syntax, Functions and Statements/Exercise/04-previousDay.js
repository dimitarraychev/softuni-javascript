function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);

    let outputYear = date.getFullYear();
    let outputMonth = date.getMonth() + 1;
    let outputDay = date.getDate();

    console.log(`${outputYear}-${outputMonth}-${outputDay}`);
}

previousDay(2016, 9, 30);