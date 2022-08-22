import { EXPLORER_API } from "./constants";

export function getResult(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}
  
export function createMovie(data, headers) {
    return fetch(`${EXPLORER_API}/movies`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: data.image,
            trailerLink: data.trailerLink,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            thumbnail: data.thumbnail,
            movieId: data.movieId
        })
    })
        .then(getResult);
}

export function getMovies(headers) {
    return fetch(`${EXPLORER_API}/movies`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}

export function deleteMovie(id, headers) {
    return fetch(`${EXPLORER_API}/movies/${id}`, {
        method: 'DELETE ',
        headers: headers
    })
        .then(getResult);
}

export function getUser(headers) {
    return fetch(`${EXPLORER_API}/users/me`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}

export function updateUser(data, headers) {
    return fetch(`${EXPLORER_API}/users/me`, {
        method: 'GET',
        headers: headers,
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    })
        .then(getResult);
}

export function login(data, headers) {
    return fetch(`${EXPLORER_API}/signin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
        .then(getResult);
}

export function createUser(data, headers) {
    return fetch(`${EXPLORER_API}/signup`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.name
        })
    })
        .then(getResult);
}