import React from "react";

const baseURL = "https://image.tmdb.org/t/p/original/";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <h1>{image.title}</h1>
      <img
        src={`${baseURL}${image.backdrop_path || image.poster_path} `}
        alt="movie poster"
      />
      {/* <p>{image.overview}</p> */}
      <h2>{image.title || image.original_name}</h2>
      <p>{image.vote_count}</p>
    </div>
  );
}

export default ImageCard;
