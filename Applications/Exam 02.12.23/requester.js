import { getUserData, clearUserData } from "./util.js";

const host = 'http://localhost:3030';

async function requester(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        let result;

        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok != true) {
            if (response.status == 403) {
                clearUserData();
            }
            throw result;
        }

        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');