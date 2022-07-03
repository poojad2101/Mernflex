import { useState, useEffect } from "react";


export default function MoviesGenreRows({ API_KEY, genreId, genreName }){

  const [movies, setMovies] = useState([]);

  const mainUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

  function getMovies(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        //console.log(data.results);
      });
  }

  console.log("render");
  useEffect(() => {
    getMovies(mainUrl);
  }, []);

    return(
        <>
      <h4 className="row-Title">{genreName}</h4>
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="movie">
              <img
                className="movie"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
    )
}
