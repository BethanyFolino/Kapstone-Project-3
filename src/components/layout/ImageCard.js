import React from "react";

const baseURL = "https://image.tmdb.org/t/p/original/";

function ImageCard({ movie }) {
  return (
    <div className="image-card">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path} `}
        alt="movie poster"
      />
      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p>{movie.vote_count}</p>
    </div>
  );
}

export default ImageCard;
