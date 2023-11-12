const usersURI = 'http://localhost:3030/users';

const endpoints = {
    register: '/register',
    login: '/login',
    logout: '/logout'
};

async function usersPostRequest(action, email, password) {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    try {
        const response = await fetch(usersURI + endpoints[action], options);
        const data = await response.json();
        
        if (response.status !== 200) throw new Error();

        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('token', data.accessToken);
    } catch (error) {
        throw new Error(error);
    }
}

async function usersGetRequest(token) {

    const options = {
        method: 'GET',
        headers: { 'X-Authorization': token }
    };

    try {
        const response = await fetch(usersURI + endpoints.logout, options);
        if (response.status !== 204) throw new Error ('Logout not possible at the moment');
        sessionStorage.clear();
    } catch (error) {
        console.log(error);
    }
}

export { usersPostRequest, usersGetRequest };