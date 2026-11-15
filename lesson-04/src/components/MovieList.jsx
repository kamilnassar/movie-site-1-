import MovieCard from "./MovieCard.jsx";
import { movies } from "../data/movies.js";
import "./MovieList.css";

function MovieList({ title, movies}) {
  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>
      <div className="movie-list__grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
            poster={movie.poster}
            available={movie.available}
          />
        ))}
      </div>
      <ul>
        {movies.map(movie => (
          <p>{movie.title}-{movie.year}</p>
        ))}
      </ul>

    </section>
  );
}

export default MovieList;