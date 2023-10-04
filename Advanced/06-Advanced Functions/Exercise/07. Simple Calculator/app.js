function calculator() {

    let selector1;
    let selector2;
    let resultSelector;

    return funcObj = {
        init: function (sel1, sel2, resSel) {
            selector1 = document.querySelector(sel1);
            selector2 = document.querySelector(sel2);
            resultSelector = document.querySelector(resSel);
        },
        add: function () {
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract: function () {
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');