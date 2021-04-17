import React from "react";

import Reviews from "../reviews/Reviews";
import ReviewForm from "../reviews/ReviewForm";

const Movie = ({ Title, Year, Poster, imdbID }) => {
  return (
    <>
      <div className="movie">
        <h1>{Title}</h1>
        <h2>{Year}</h2>
        <div>
          <img src={Poster} alt={Title} />
          <button>Leave a Review</button>OR
          <button>LIKE</button>
        </div>
      </div>

      {/* reviews - imdbID exists here */}
      <ReviewForm imdbID={imdbID} />
      <Reviews imdbID={imdbID} />
    </>
  );
};

export default Movie;
