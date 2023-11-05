const main = document.querySelector('main');
const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

function addArticle(element) {
    const newArt = document.createElement('article');
    newArt.classList.add('preview');

    const newDivOne = document.createElement('div');
    newDivOne.classList.add('title');

    const newHTwo = document.createElement('h2');
    newHTwo.textContent = element.name;

    newDivOne.appendChild(newHTwo);
    newArt.appendChild(newDivOne);

    const newDivTwo = document.createElement('div');
    newDivTwo.classList.add('small');

    const newImg = document.createElement('img');
    newImg.src = element.img;

    newDivTwo.appendChild(newImg);
    newArt.appendChild(newDivTwo);

    main.appendChild(newArt);
}