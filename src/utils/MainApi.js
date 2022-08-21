const url = 'url';
export const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

export function getResult(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}
  
export function createMovie(data) {
    return fetch(`${url}/movies`, {
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

export function getMovies() {
    return fetch(`${url}/movies`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}

export function deleteMovie(id) {
    return fetch(`${url}/movies/${id}`, {
        method: 'DELETE ',
        headers: headers
    })
        .then(getResult);
}

export function getUser() {
    return fetch(`${url}/users/me`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}

export function updateUser(data) {
    return fetch(`${url}/users/me`, {
        method: 'GET',
        headers: headers,
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    })
        .then(getResult);
}

export function login(data) {
    return fetch(`${url}/signin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
        .then(getResult);
}

export function createUser(data) {
    return fetch(`${url}/signup`, {
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