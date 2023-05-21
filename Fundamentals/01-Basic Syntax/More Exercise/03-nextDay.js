function nextDay(a, b, c) {

    let nextDay = new Date(a, b - 1, c + 1);

    let year = nextDay.getFullYear();
    let month = nextDay.getMonth() + 1;
    let day = nextDay.getDate();

    console.log(`${year}-${month}-${day}`);

}

nextDay(2020, 3, 24);