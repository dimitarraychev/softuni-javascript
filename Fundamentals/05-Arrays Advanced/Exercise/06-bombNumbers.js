// function bombNumbers(numbersArr, bombArr) {
// 
//     let bombNumber = Number(bombArr[0]);
//     let bombPower = Number(bombArr[1]);
//     let resultArr = numbersArr.slice(0);
//     let sumOfResult = 0;
// 
//     for (let number of resultArr) {
// 
//         if (number === bombNumber) {
//             let indexOfNum = resultArr.indexOf(number);
//             let startNumIndex = indexOfNum - bombPower;
//             let bombedNumbers = 1 + 2 * bombPower;
//             
//             if (startNumIndex < 0) {
//                 startNumIndex = 0;
//                 bombedNumbers = 1 + bombPower;
//             } else if (startNumIndex + 1 < bombPower) {
//                 bombedNumbers = Math.abs(startNumIndex + 1 - bombPower);
//             }
// 
//             resultArr.splice(startNumIndex, bombedNumbers);
//         }
//     }
// 
//     resultArr.forEach(el => { sumOfResult += el });
//     console.log(sumOfResult);
// }

function bomb(numbers, params) {
    let [target, power] = params;
  
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];
  
      if (currentNum === target) {
        let startIndex = Math.max(0, i - power);
        let countToEnd = power * 2 + 1;
  
        numbers.splice(startIndex, countToEnd);
        i = i - power - 1; //
      }
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
  }

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [3, 2]);