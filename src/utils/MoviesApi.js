import { getResult, headers } from "./MainApi"

const url = "https://api.nomoreparties.co/";

export function getAllMovies() {
    return fetch(`${url}/beatfilm-movies`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}