function matchDates(text) {

    let regex = /\b(?<day>\d{2})([./-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;
    let result = regex.exec(text);

    while (result) {
        let day = result.groups.day;
        let month = result.groups.month;
        let year = result.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        result = regex.exec(text);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);