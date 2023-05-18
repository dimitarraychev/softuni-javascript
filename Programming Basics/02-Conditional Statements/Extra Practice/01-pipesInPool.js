function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let tube1 = p1 * h;
    let tube2 = p2 * h;
    let totalFilled = tube1 + tube2;
    let percentFilled = totalFilled / v * 100;
    let percentTube1 = tube1 / totalFilled * 100;
    let percentTube2 = tube2 / totalFilled * 100;

    if (totalFilled <= v) {
        console.log(`The pool is ${percentFilled.toFixed(2)}% full. Pipe 1: ${percentTube1.toFixed(2)}%. Pipe 2: ${percentTube2.toFixed(2)}%.`);
    } else {
        let excess = totalFilled - v;
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${excess.toFixed(2)} liters.`);
    }

}

pipesInPool(["1000", "100", "120", "3"]);