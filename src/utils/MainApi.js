import { EXPLORER_API } from "./constants";

export function getResult(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}
  
export function createMovie(data, jwt) {
    return fetch(`${EXPLORER_API}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include",
        body: JSON.stringify({
            country: data.country || ' ',
            director: data.director || ' ',
            duration: data.duration || ' ',
            year: data.year || ' ',
            description: data.description || ' ',
            image: data.image || ' ',
            trailerLink: data.trailerLink || "https://www.youtube.com/watch?v=W85oD8FEF78",
            nameRU: data.nameRU || ' ',
            nameEN: data.nameEN || ' ',
            thumbnail: data.thumbnail || 'https://sun9-80.userapi.com/s/v1/ig2/FXzZiELxAFbU4ePbx92iM7sHqTi9JcYVee_63IC8mEzKNOxfZ_mXfOtU4lyLwzPdnLV5JpIetaTZ5IJF5eUd7Qh9.jpg?size=200x200&quality=96&crop=0,0,599,599&ava=1',
            movieId: data.movieId
        })
    })
        .then(getResult);
}

export function getMySavedMovies(jwt) {
    return fetch(`${EXPLORER_API}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include"
    })
        .then(getResult);
}

export function deleteMovie(id, jwt) {
    return fetch(`${EXPLORER_API}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include"
    })
        .then(getResult);
}

export function getUser(jwt) {
    return fetch(`${EXPLORER_API}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'authorization': 'Bearer ' + jwt,
            'Access-Control-Allow-Credentials': 'true'
        },
        credentials: "include"
    })
        .then(getResult);
}

export function updateUser(data, jwt) {
    return fetch(`${EXPLORER_API}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include",
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    })
        .then(getResult);
}

export function login(data, jwt) {
    return fetch(`${EXPLORER_API}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include",
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
        .then(getResult);
}

export function createUser(data, jwt) {
    return fetch(`${EXPLORER_API}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': 'Bearer ' + jwt,
        },
        credentials: "include",
        body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.name
        })
    })
        .then(getResult);
}