function attachEventsListeners() {

    const buttons = document.querySelectorAll('input[type="button"]');
    const [daysText, hoursText, minsText, secsText] = Array.from(document.querySelectorAll('input[type="text"]'));

    for (const button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        const targetButton = event.target;
        const inputValue = targetButton.parentNode.children[1].value;

        const timeObj = {
            daysBtn: function (days) {
                daysText.value = days;
                hoursText.value = days * 24;
                minsText.value = days * 24 * 60;
                secsText.value = days * 24 * 3600;
            },
            hoursBtn: function (hours) {
                let days = hours / 24;
                timeObj['daysBtn'](days);
            },
            minutesBtn: function (mins) {
                let days = mins / 60 / 24;
                timeObj['daysBtn'](days);
            },
            secondsBtn: function (secs) {
                let days = secs / 3600 / 24;
                timeObj['daysBtn'](days);
            },
        };

        timeObj[targetButton.id](inputValue);
    }
}