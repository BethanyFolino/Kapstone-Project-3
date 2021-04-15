import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { initialMovies } from "../../actions/movies";
import Movie from "../layout/Movie";
// import axios from "axios";

const entUrl =
  "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/";
const MovieSearchResults = (props) => {
  const [formData, setFormData] = useState({
    Title: "",
  });
  const { Title } = formData;

  // this will be where we make it dynamic based upon state
  const getItemData = (Title) => {
    fetch(
      `https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/?Title=${Title}&ProgramType=Movie`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
            "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
          "x-rapidapi-host":
            "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const data = response.ProgramMatches;
        console.log(data);
        setFormData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getItemData(Title);
  };

  return (
    <>
      <div className="moviesearchresults">Search for your favorite movie!</div>
      <div className="search">
        <form id="search" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="Title"
            placeholder="ex: Lion King"
            onChange={handleChange}
          />

          <button type="submit">Search</button>
        </form>
      </div>
      <div>{formData.length >= 0 && formData.map((movie) => <Movie key={movie.Id} {...movie}/>)}</div>
    </>
  );
};

MovieSearchResults.propTypes = {};

export default MovieSearchResults;
