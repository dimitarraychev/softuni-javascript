function tradeComissions(input) {

    let city = input[0];
    let sales = Number(input[1]);

    let comission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case "Sofia":
                comission = sales * 0.05;
                console.log(comission.toFixed(2));
                break;
            case "Varna":
                comission = sales * 0.045;
                console.log(comission.toFixed(2));
                break;
            case "Plovdiv":
                comission = sales * 0.055;
                console.log(comission.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales >= 500 && sales <= 1000) {
        switch (city) {
            case "Sofia":
                comission = sales * 0.07;
                console.log(comission.toFixed(2));
                break;
            case "Varna":
                comission = sales * 0.075;
                console.log(comission.toFixed(2));
                break;
            case "Plovdiv":
                comission = sales * 0.08;
                console.log(comission.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales >= 1000 && sales <= 10000) {
        switch (city) {
            case "Sofia":
                comission = sales * 0.08;
                console.log(comission.toFixed(2));
                break;
            case "Varna":
                comission = sales * 0.1;
                console.log(comission.toFixed(2));
                break;
            case "Plovdiv":
                comission = sales * 0.12;
                console.log(comission.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                comission = sales * 0.12;
                console.log(comission.toFixed(2));
                break;
            case "Varna":
                comission = sales * 0.13;
                console.log(comission.toFixed(2));
                break;
            case "Plovdiv":
                comission = sales * 0.145;
                console.log(comission.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }

}

tradeComissions(["Plovdiv", "499.99"]);