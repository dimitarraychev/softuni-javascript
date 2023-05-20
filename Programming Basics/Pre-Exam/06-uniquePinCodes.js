function uniquePinCodes(input) {
    
    let n1Cap = Number(input[0]);
    let n2Cap = Number(input[1]);
    let n3Cap = Number(input[2]);

    for (let n1 = 1; n1 <= n1Cap; n1++) {
        if (n1 % 2 === 0) {
            for (let n2 = 1; n2 <= n2Cap; n2++) {
                if (n2 === 2 || n2 === 3 || n2 === 5 || n2 === 7) {
                    for (let n3 = 1; n3 <= n3Cap; n3++) {
                        if (n3 % 2 === 0) {
                            console.log(`${n1} ${n2} ${n3}`);
                        }
                    }
                }
            }
        }
    }
}

uniquePinCodes(["3",
    "5",
    "5"])