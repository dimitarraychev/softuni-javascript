function attachEvents() {
    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastField = document.getElementById('forecast');
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');

    const symbolsObj = {
        'Sunny': '&#x2600;',        // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;',     // ☁
        'Rain': '&#x2614;',         // ☂
        'Degrees': '&#176;'         // °
    }

    const baseURI = 'http://localhost:3030/jsonstore/forecaster';
    let currLocationCode = '';

    submitBtn.addEventListener('click', getForecast);

    async function getForecast() {
        try {
            const uri = baseURI + '/locations/';
            const response = await fetch(uri);
            const locationData = await response.json();

            Object.values(locationData).forEach(loc => {
                if (loc.name === location.value) {
                    currLocationCode = loc.code;
                }
            });

            currentConditions(currLocationCode);
            threeDayForecast(currLocationCode);
        } catch (e) {
            console.log(e);
        }
    }

    async function currentConditions(code) {
        const uri = baseURI + '/today/' + code;
        const response = await fetch(uri);
        const conditionsData = await response.json();

        forecastField.style.display = 'block';

        const div = document.createElement('div');
        div.classList.add('forecasts');

        const spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition');
        spanSymbol.classList.add('symbol');
        spanSymbol.innerHTML = symbolsObj[conditionsData.forecast.condition];

        const spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');

        const spanDataOne = document.createElement('span');
        spanDataOne.classList.add('forecast-data');
        spanDataOne.textContent = conditionsData.name;
        spanCondition.appendChild(spanDataOne);

        const spanDataTwo = document.createElement('span');
        spanDataTwo.classList.add('forecast-data');
        spanDataTwo.innerHTML = `${conditionsData.forecast.low}${symbolsObj.Degrees}/${conditionsData.forecast.high}${symbolsObj.Degrees}`;
        spanCondition.appendChild(spanDataTwo);

        const spanDataThree = document.createElement('span');
        spanDataThree.classList.add('forecast-data');
        spanDataThree.textContent = conditionsData.forecast.condition;
        spanCondition.appendChild(spanDataThree);

        div.appendChild(spanSymbol);
        div.appendChild(spanCondition);
        currentWeather.appendChild(div);
    }

    async function threeDayForecast(code) {
        const uri = baseURI + '/upcoming/' + code;
        const response = await fetch(uri);
        const threeDayData = await response.json();
        console.log(threeDayData);

        const divInfo = document.createElement('div');
        divInfo.classList.add('forecast-info');

        threeDayData.forecast.forEach(el => {
            const mainSpan = document.createElement('span');
            mainSpan.classList.add('upcoming');

            const spanSymbol = document.createElement('span');
            spanSymbol.classList.add('symbol');
            spanSymbol.innerHTML = symbolsObj[el.condition];
            mainSpan.appendChild(spanSymbol);

            const spanDegrees = document.createElement('span');
            spanDegrees.classList.add('forecast-data');
            spanDegrees.innerHTML = `${el.low}${symbolsObj.Degrees}/${el.high}${symbolsObj.Degrees}`;
            mainSpan.appendChild(spanDegrees);

            const spanCondition = document.createElement('span');
            spanCondition.classList.add('forecast-data');
            spanCondition.textContent = el.condition;
            mainSpan.appendChild(spanCondition);

            divInfo.appendChild(mainSpan);
        });

        upcomingWeather.appendChild(divInfo);
    }

}

attachEvents();