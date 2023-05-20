function changeBureau(input) {
    
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let comission = Number(input[2]);

    let btcToLv = bitcoin * 1168;
    let yuanToLv = (yuan * 0.15) * 1.76;
    let totalToEur = (btcToLv + yuanToLv) / 1.95;
    let total = totalToEur - (totalToEur * (comission / 100));

    console.log(total.toFixed(2));

}

changeBureau(["1", "5", "5"]);