function solution() {
    const mainRef = document.querySelector('#main');
    const baseURI = 'http://localhost:3030/jsonstore/advanced/articles';

    (async function fetchData() {
        try {
            const response = await fetch(baseURI + '/list');
            const articlesData = await response.json();
            articlesData.forEach(element => {
                createArticle(element);
            });
        } catch (e) {
            console.log(e);
        }
    })();

    async function createArticle(data) {
        await data;
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('accordion');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('head');
        mainDiv.appendChild(infoDiv);

        const titleSpan = document.createElement('span');
        titleSpan.textContent = data.title;
        infoDiv.appendChild(titleSpan);

        const button = document.createElement('button');
        button.classList.add('button');
        button.id = data._id;
        button.textContent = 'More';
        button.addEventListener('click', showMore);
        infoDiv.appendChild(button);

        const extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        extraDiv.style.display = 'none';
        mainDiv.appendChild(extraDiv);

        const infoPar = document.createElement('p');
        extraDiv.appendChild(infoPar);

        mainRef.appendChild(mainDiv);
    }

    async function showMore(event) {
        const currTarget = event.target.parentNode.parentNode;
        const hiddenDiv = currTarget.querySelector('.extra');
        const paragraph = currTarget.querySelector('.extra p');
        const currID = event.target.id;

        if (!event.target.classList.contains('shown')) {
            try {
                const response = await fetch(baseURI + /details/ + currID);
                const data = await response.json();

                paragraph.textContent = data.content;

                hiddenDiv.style.display = 'block';
                event.target.textContent = 'Less';
                event.target.classList.add('shown');
            } catch (e) {
                console.log(e);
            }
        } else {
            hiddenDiv.style.display = 'none';
            event.target.textContent = 'More';
            event.target.classList.remove('shown');
        }
    }
}

solution();