function gladiatorExpenses(lostFights, helmet, sword, shield, armor) {

    let expenses = 0;

    for (let losses = 1; losses <= lostFights; losses++) {

        if (losses % 2 === 0) {
            expenses += helmet;
        }

        if (losses % 3 === 0) {
            expenses += sword;
        }

        if (losses % 6 === 0) {
            expenses += shield;
        }

        if (losses % 12 === 0) {
            expenses += armor;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5);