function loadRepos() {
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');
	const url = 'https://api.github.com/users/' + username + '/repos';

	fetch(url)
		.then((response) => response.json())
		.then((data) => data.forEach(element => newListItem(element)))
		.catch((error) => console.error(error))

	function newListItem(repo) {
		const newLi = document.createElement('li');
		const newA = document.createElement('a')
		newA.href = `${repo.html_url}`;
		newA.textContent = repo.full_name;

		newLi.appendChild(newA);
		list.appendChild(newLi);
	}
}