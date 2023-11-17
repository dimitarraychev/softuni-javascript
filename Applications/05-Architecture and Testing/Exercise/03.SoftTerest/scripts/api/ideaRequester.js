const ideasURI = 'http://localhost:3030/data/ideas'
const allIdeasEndpoint = '?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc';

export async function ideasGetRequest(id) {
    const endpoint = id === 'all' ? allIdeasEndpoint : `/${id}`;

    try {
        const response = await fetch(ideasURI + endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function ideaPostRequest(title, description, image) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': localStorage.getItem('token') },
        body: JSON.stringify({ title, description, image })
    }

    try {
        const response = await fetch(ideasURI, options);
        const data = await response.json();
    } catch (error) {
        throw error;
    }
}

export async function ideaDeleteRequest(id) {
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': localStorage.getItem('token') }
    }

    try {
        const response = await fetch(ideasURI + '/' + id, options);
        if (!response.ok) throw new Error();
        const data = await response.json();
    } catch (error) {
        console.log(error);   
    }
}