function vacation(people, group, day) {

    let price = 0;

    if (group === 'Students') {
        switch (day) {
            case 'Friday': price = 8.45; break;
            case 'Saturday': price = 9.80; break;
            case 'Sunday': price = 10.46; break;
        }
        if (people >= 30) {
            price *= 0.85;
        }
    } else if (group === 'Business') {
        if (people >= 100) {
            people -= 10;
        }
        switch (day) {
            case 'Friday': price = 10.90; break;
            case 'Saturday': price = 15.60; break;
            case 'Sunday': price = 16; break;
        }    
    } else if (group === 'Regular') {
        switch (day) {
            case 'Friday': price = 15; break;
            case 'Saturday': price = 20; break;
            case 'Sunday': price = 22.50; break;
        }
        if (people >= 10 && people <= 20) {
            price *= 0.95;
        }
    }  
    console.log(`Total price: ${(price * people).toFixed(2)}`);
}
vacation(30, "Students", "Sunday");