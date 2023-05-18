function birthdayParty (input) {
    let rent = Number(input[0]);
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let price = rent + cake + drinks + animator;
    console.log(price);


}

birthdayParty(["3720"]);