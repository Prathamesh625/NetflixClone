import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">{movie.title || movie.name}</h1>
            <div className="banner_buttons">
              {/*}  <button className="banner_button">Play</button>
              <button className="banner_button">Playlist</button>
        */}
            </div>
            <div>
              <h1 className="banner_description">
                {truncate(movie.overview, 150)}
              </h1>
            </div>
          </div>
        </div>
        <div className="banner_fadebutton" />
      </header>
    </div>
  );
}

export default Banner;
