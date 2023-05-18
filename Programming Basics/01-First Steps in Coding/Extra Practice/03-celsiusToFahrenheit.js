function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    console.log((celsius * 1.8 + 32).toFixed(2));
}

celsiusToFahrenheit(["25"]);