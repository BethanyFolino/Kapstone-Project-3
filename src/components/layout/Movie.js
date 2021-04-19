import React, { useState } from "react";

import Reviews from "../reviews/Reviews";
import ReviewForm from "../reviews/ReviewForm";

const Movie = ({ Title, Year, Poster, imdbID }) => {
  const [likes, setLikes] = useState(0);

  const likeTheMovie = (e) => {
    if (likes >= 0) {
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <div className="movie">
        <h1>{Title}</h1>
        <h2>{Year}</h2>
        <div>
          <img src={Poster} alt={Title} />
        </div>
      </div>
      <div>{likes}</div>
      <button onClick={likeTheMovie}>Like</button>
      {/* reviews - imdbID exists here */}
      <ReviewForm imdbID={imdbID} />
      <Reviews imdbID={imdbID} />
    </>
  );
};

export default Movie;
