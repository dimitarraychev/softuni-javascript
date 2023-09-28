function solve() {

  const inputText = document.getElementById('input').value;
  const outputArea = document.getElementById('output');

  const sentencesArr = inputText.split('.').filter(p => p);
  const length = sentencesArr.length;
  let result = '';
  let counter = 0;

  for (let i = 0; i < length; i++) {
    let sentence = sentencesArr.shift();

    if (counter === 0) {
      result += '<p>';
    }

    result += sentence + '.';
    counter++;

    if (counter === 3 || sentencesArr.length < 1) {
      result += '</p>';
      counter = 0;
    }
  }

  outputArea.innerHTML = result;
}