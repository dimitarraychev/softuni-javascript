import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const catsSection = document.querySelector('#allCats');

function createCatCards(cats, render) {
    const ul = html`<ul>
    ${cats.map(cat =>
        html`<li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${showDetails}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`
    )}
    </ul>`

    render(ul, catsSection);
}

function showDetails(e) {
    const hiddenContent = e.target.parentElement.querySelector('.status');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        hiddenContent.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}

createCatCards(cats, render);