import { MOVIES_API } from "./constants";

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
  // console.log(array);
  // console.log(isShort, "checkbox");
  // console.log(key, "key");
  key = key.toLowerCase();
  const found = array.filter((obj) => {

    if (isShort === (obj.duration <= 40)) {
      if (key === "") {
        // console.log("key is empty");
        return obj;
        }
        if (obj.nameEN || obj.nameRU) {
          if (obj.nameRU) {
            const nameRU = obj.nameRU.toLowerCase();
            // console.log("nameRu exists");
            if (nameRU.includes(key)) {
              // console.log("1");
              return obj;
            }
          }
          if (obj.nameEN) {
            const nameEN = obj.nameEN.toLowerCase();
            // console.log("nameEN exists");
            if (nameEN.includes(key)) {
              // console.log("2");
              return obj;
            }
          }
        }
      }
      return null;
    })
  // console.log(found, "found");
  return found;
  }