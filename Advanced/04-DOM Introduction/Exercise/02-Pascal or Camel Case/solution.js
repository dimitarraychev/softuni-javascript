function solve() {

  const inputText = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  let result = '';

  let textArr = inputText.toLowerCase().split(' ');

  if (convention === 'Camel Case') {
    result += textArr.shift();

    for (const word of textArr) {
      result += word[0].toUpperCase() + word.substr(1);
    }

  } else if (convention === 'Pascal Case') {

    for (const word of textArr) {
      result += word[0].toUpperCase() + word.substr(1);
    }

  } else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result
}