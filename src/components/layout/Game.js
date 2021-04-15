import React from "react";

const Game = ({ Title, Summary, IvaRating, Year }) => (
  // { const data = Summary.Image}
  <div className="game">
    {" "}
    <h1>{Title}</h1>
    <h2>Released {Year}</h2>
    <h2>Rating: {IvaRating}</h2>
    {/* <img src={`https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/?Title=${Title}&ProgramType=Movie/${Summary.Image}`} /> */}
  </div>
);

export default Game;
