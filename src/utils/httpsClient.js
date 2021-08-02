const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FhMzhjNGJhMzQwZjQ4MWYxOTQ5OTkzMTU3YTFlMiIsInN1YiI6IjYxMDRlMTY1ZjcwNmRlMDAyNmMyYWQ4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6GgrCmB642kdhH8vkN3fYCA__Y0zU4tm4RHd5WzCh4Y",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
