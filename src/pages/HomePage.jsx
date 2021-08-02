import MoviesGrid from "../components/MoviesGrid";
import { Grid } from "@material-ui/core";
import SearchMovies from "../searchMovie/SearchMovies";
import { useState, useEffect } from "react";
import { get } from "../utils/httpsClient";

const HomePage = () => {
  const onChangeSearch = (e) => {
    if (e.target.value === "") {
      setMovies(copyMovies);
    } else {
      const x = currentMovies.filter((z) => {
        return z.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setMovies(x);
    }
  };

  const [currentMovies, setMovies] = useState([]);
  const [copyMovies, setCopyMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setCopyMovies(data.results);
    });
  }, []);

  return (
    <div>
      <header>
        <Grid item xs={12}>
          <SearchMovies action={(e) => onChangeSearch(e)} />
        </Grid>
      </header>
      <main>
        <MoviesGrid movies={currentMovies} />
      </main>
    </div>
  );
};

export default HomePage;
