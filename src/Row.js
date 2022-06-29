import React, { useEffect, useState } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      console.log(request.data.results);
      console.log(movies);
      return request;
    }

    fetchdata();
  }, [fetchUrl]);

  console.table(movies);

  const handleSearch = (movie) => {
    movieTrailer(movie.name || movie.title).then((res) => {
      setTrailer(res);
    });
  };

  return (
    <div className="row">
      <h2 style={{ marginLeft: "2rem", fontSize: "100%" }}> {title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <div>
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="img"
                onClick={() => {
                  handleSearch(movie);
                }}
              />
            </div>
          );
        })}
      </div>
      <div>
        {trailer && (
          <div>
            <ReactPlayer
              height="500px"
              width="800px"
              url={trailer}
              autoPlay={true}
              ///option={options}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Row;

///<iframe width="300" height="500" src="https://www.youtube.com/embed/luC0Xm8fKKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
