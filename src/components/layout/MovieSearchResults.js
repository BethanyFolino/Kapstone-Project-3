import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { initialMovies } from "../../actions/movies";
import Movie from "../layout/Movie";
// import axios from "axios";

const entUrl =
  "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/";
const MovieSearchResults = (props) => {
  const [formData, setFormData] = useState({
    Search: "",
  });
  const { Search } = formData;

  const getItemData = (Search) => {
    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${Search}&page=1&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setFormData(data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
    //   fetch(
    //     `https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/?Title=${Title}&ProgramType=Movie`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "content-type": "application/json",
    //         "x-rapidapi-key":
    //           "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
    //         "x-rapidapi-host":
    //           "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
    //       },
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((response) => {
    //       const data = response.ProgramMatches;
    //       console.log(data);
    //       setFormData(data);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getItemData(Search);
  };

  return (
    <>
      <div className="moviesearchresults">
        Search for your favorite Movies, TV Shows, and Games!
      </div>
      <div className="search">
        <form id="search" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="Search"
            placeholder="ex: Lion King"
            onChange={handleChange}
          />

          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {formData.length >= 0 &&
          formData.map((movie) => <Movie key={movie.imbdID} {...movie} />)}
      </div>
    </>
  );
};

MovieSearchResults.propTypes = {};

export default MovieSearchResults;
