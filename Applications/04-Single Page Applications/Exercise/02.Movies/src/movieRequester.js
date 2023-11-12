const moviesURI = 'http://localhost:3030/data/movies';

async function moviesGetAllRequest(token) {
    try {
        const response = await fetch(moviesURI, { method: 'GET' });
        if (response.status !== 200) throw new Error ('Unable to fetch movies from server.');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export { moviesGetAllRequest };