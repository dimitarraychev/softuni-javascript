function solve() {

  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputText, outputText] = document.querySelectorAll('textarea');
  const tableHead = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {
    const inputToObj = JSON.parse(inputText.value);

    for (const obj of inputToObj) {
      let newTr = document.createElement('tr');
      newTr.innerHTML = `<td><img src=${obj.img}></td><td><p>${obj.name}</p></td>`;
      newTr.innerHTML += `<td><p>${obj.price}</p></td><td><p>${obj.decFactor}</p></td>`;
      newTr.innerHTML += '<td><input type="checkbox"/></td>';
      tableHead.appendChild(newTr);
    }
  }

  function buy(e) {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    let productsArr = [];
    let totalPrice = 0;
    let decFactor = 0;
    let counter = 0;

    for (const check of checkBoxes) {
      if (check.checked) {
        const selectedItem = check.parentNode.parentNode;
        productsArr.push(selectedItem.children[1].textContent);
        totalPrice += Number(selectedItem.children[2].textContent);
        decFactor += Number(selectedItem.children[3].textContent);
        counter++;
      }
    }

    decFactor /= counter;

    outputText.value += `Bought furniture: ${productsArr.join(', ')}\n`;
    outputText.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputText.value += `Average decoration factor: ${decFactor}`;
  }
}