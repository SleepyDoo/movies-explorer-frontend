import { MOVIES_API } from "./constants";
import validator from 'validator'

export function fixMovieDuraton(movie) {
    let hours;
    let minutes;
    if (movie.duration > 60) {
      hours = 0;
    }
    if (movie.duration % 60 === 0) {
      minutes = 0;
      hours = movie.duration / 60;
    }
    if (movie.duration % 60 !== 0) {
      minutes = movie.duration % 60;
      hours = (movie.duration - minutes) / 60;
    }

    const dur = `${hours ? `${hours}ч` : "" } ${minutes ? `${minutes}мин` : ""}`

    return {...movie, duration: dur}

}
  
export function fixMovieImageAndId(movie) {
  const url = MOVIES_API + movie.image.url;
  return {...movie, image: url, movieId: movie.id}
}

export function filterMovies(array, key, isShort) {
  key = key.toLowerCase();
  const found = array.filter((obj) => {

    if (isShort === (obj.duration <= 40)) {
      if (key === "") {
        return obj;
        }
        if (obj.nameEN || obj.nameRU) {
          if (obj.nameRU) {
            const nameRU = obj.nameRU.toLowerCase();
            if (nameRU.includes(key)) {
              return obj;
            }
          }
          if (obj.nameEN) {
            const nameEN = obj.nameEN.toLowerCase();
            if (nameEN.includes(key)) {
              return obj;
            }
          }
        }
      }
      return null;
    })
  return found;
}
  
export function parseNewMovieData({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId}) {
  
  if (!country) {
    country = "Неизвестно";
  }

  if (!director) {
    director = "Неизвестно";
  }
  
  if (!duration || isNaN(duration)) {
    duration = "00"
  }

  if (!year || !year.match(/\d\d\d\d/gi)[0] === year) {
    year = "404";
  }

  if (!description) {
    description = " ";
  }

  if (!image || !validator.isURL(image)) {
    image = "https://sun9-80.userapi.com/s/v1/ig2/FXzZiELxAFbU4ePbx92iM7sHqTi9JcYVee_63IC8mEzKNOxfZ_mXfOtU4lyLwzPdnLV5JpIetaTZ5IJF5eUd7Qh9.jpg?size=200x200&quality=96&crop=0,0,599,599&ava=1"
  }

  if (!trailerLink || !validator.isURL(trailerLink)) {
    trailerLink = "https://www.youtube.com/watch?v=W85oD8FEF78";
  }

  if (!nameRU) {
    nameRU = " ";
  }

  if (!nameEN) {
    nameEN = " ";
  }

  if (!thumbnail || !validator.isURL(thumbnail)) {
    thumbnail = "https://sun9-80.userapi.com/s/v1/ig2/FXzZiELxAFbU4ePbx92iM7sHqTi9JcYVee_63IC8mEzKNOxfZ_mXfOtU4lyLwzPdnLV5JpIetaTZ5IJF5eUd7Qh9.jpg?size=200x200&quality=96&crop=0,0,599,599&ava=1";
  }

  return {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  }

}