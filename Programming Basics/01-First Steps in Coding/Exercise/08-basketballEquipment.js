function basketballEquipment(input) {

    let tax = Number(input[0]);
    let kicks = tax - 0.4 * tax;
    let suit = kicks - 0.2 * kicks;
    let ball = 0.25 * suit;
    let misc = 0.2 * ball;

    console.log(tax + kicks + suit + ball + misc);
    
}

basketballEquipment(["550"]);