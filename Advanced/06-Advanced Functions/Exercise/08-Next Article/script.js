function getArticleGenerator(articles) {

    const content = document.querySelector('#content');

    return function nextArticle() {
        if (articles.length > 0) {
            let newArticle = document.createElement('article');
            newArticle.textContent = articles.shift();
            content.appendChild(newArticle);
        }
    }
}