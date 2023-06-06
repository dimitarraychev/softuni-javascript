function loadingBar(num) {

    let percentSigns = num / 10;
    let dotSigns = 10 - percentSigns;

    if (percentSigns === 10) {
        console.log("100% Complete!");
    } else {
        console.log(`${num}% [${"%".repeat(percentSigns)}${".".repeat(dotSigns)}]`);
        console.log("Still loading... ");
    }
}

loadingBar(30);