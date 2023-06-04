function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        let currNum = String(arr[i]);
        let reversedNum = currNum.split('').reverse().join('');

        let isPalindromeInt = currNum === reversedNum ? true : false;

        console.log(isPalindromeInt);
    }
}

palindromeIntegers([123,323,421,121]);