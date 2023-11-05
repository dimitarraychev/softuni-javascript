function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const list = document.getElementById('commits');

    let url = 'https://api.github.com/repos';
    url += '/' + username.value + '/' + repo.value + '/commits';

    fetch(url)
        .then((response) => response.json())
        .then((data) => data.forEach(element => createListItem(element)))
        .catch((error) => catchError(error))

    function createListItem(element) {
        const newLi = document.createElement('li');
        newLi.textContent = `${element.commit.author.name}: ${element.commit.message}`;

        list.appendChild(newLi);
    }

    function catchError(error) {
        const newLi = document.createElement('li');
        newLi.textContent = `Error: ${error.status} (Not Found)`;

        list.appendChild(newLi);
    }
}