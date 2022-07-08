import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";

const Movies = () => {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
        </div>
    )
}

export default Movies;