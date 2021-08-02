import React from "react";
import { Grid, TextField, InputLabel } from "@material-ui/core";
import styles from "../searchMovie/SearchMovies.module.css";

const SearchMovies = ({ action }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      item
      xs={12}
    >
      <InputLabel className={styles.label}>Search:</InputLabel>
      <TextField
        className={styles.container}
        type="text"
        variant="outlined"
        onChange={action}
        placeholder="Search Movie"
      ></TextField>
    </Grid>
  );
};
export default SearchMovies;
