import React from "react";

const Movie = ({ Title, Year, Poster }) => {
  
  return (
    <div className="movie">
      <h1>{Title}</h1>
      <h2>{Year}</h2>
      <div>
        <img src={Poster} alt={Title} />
        <button>Leave a Review</button>OR
        <button>LIKE</button>
      </div>
      
    </div>
  );
};



export default Movie;
