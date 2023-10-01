function attachEventsListeners() {

    const convertBtn = document.querySelector('input[type="button"]');
    const inputUnits = document.querySelector('#inputUnits');
    const outputUnits = document.querySelector('#outputUnits');
    const inputText = document.querySelector('#inputDistance');
    const outputText = document.querySelector('#outputDistance');

    convertBtn.addEventListener('click', convertToM);

    function convertToM(e) {
        let optionValue = inputUnits.value;
        let outputValue = outputUnits.value;

        if (optionValue === outputValue) {
            return outputText.value = inputText.value;
        }

        const inputToM = {
            'km': function (km) { return km * 1000 },
            'm': function (m) { return m },
            'cm': function (cm) { return cm * 0.01 },
            'mm': function (mm) { return mm * 0.001 },
            'mi': function (mi) { return mi * 1609.34 },
            'yrd': function (yrd) { return yrd * 0.9144 },
            'ft': function (ft) { return ft * 0.3048 },
            'in': function (inches) { return inches * 0.0254 }
        };

        let convertedToM = inputToM[optionValue](Number(inputText.value));

        convertToSelected(convertedToM);

        function convertToSelected(convertedToM) {

            const metersToOutput = {
                'km': function (m) { return m / 1000 },
                'm': function (m) { return m },
                'cm': function (m) { return m / 0.01 },
                'mm': function (m) { return m / 0.001 },
                'mi': function (m) { return m / 1609.34 },
                'yrd': function (m) { return m / 0.9144 },
                'ft': function (m) { return m / 0.3048 },
                'in': function (m) { return m / 0.0254 }
            };

            let convertedToSelected = metersToOutput[outputValue](convertedToM);

            return outputText.value = convertedToSelected;
        }
    }
}