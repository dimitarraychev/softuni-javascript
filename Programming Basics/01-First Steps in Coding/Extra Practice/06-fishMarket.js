function fishMarket (input) {

    let skumriaPr = Number(input[0]);
    let cacaPr = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudTotal = (skumriaPr + skumriaPr * 0.6) * palamudKg;
    let safridTotal = (cacaPr + cacaPr *0.8) * safridKg;
    
    console.log((palamudTotal + safridTotal + midiKg * 7.5).toFixed(2));
    
}   

fishMarket(["6.90", "4.20", "1.5", "2.5", "1"]);