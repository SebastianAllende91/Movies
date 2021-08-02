import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = ({ movies }) => {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
