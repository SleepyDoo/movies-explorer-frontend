import { getResult } from "./MainApi"

let headers = {
    'Content-Type': 'application/json'
  };

const url = "https://api.nomoreparties.co/";

export function getAllMovies() {
    return fetch(`${url}/beatfilm-movies`, {
        method: 'GET',
        headers: headers
    })
        .then(getResult);
}