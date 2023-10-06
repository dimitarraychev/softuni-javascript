function subtract() {

    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;

    let result = Number(firstNum) - Number(secondNum);
    
    document.getElementById('result').textContent = result;
}