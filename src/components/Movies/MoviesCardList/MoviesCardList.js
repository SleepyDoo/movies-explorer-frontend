import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"

const MoviesCardList = () => {
    return (
        <div className="movies-card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </div>
    )
}

export default MoviesCardList;