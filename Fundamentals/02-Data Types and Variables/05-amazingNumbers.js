function amazingNumbers(num) {
    let numToStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numToStr.length ; i++) {
        sum += Number(numToStr[i]);
    }
    
    let sumToStr = sum.toString();
    let result = sumToStr.includes('9') ? 'True' : 'False';
    console.log(`${num} Amazing? ${result}`);
}
amazingNumbers(1233);