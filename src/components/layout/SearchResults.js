import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { initialMovies } from "../../actions/movies";
// import axios from "axios";

const entUrl =
  "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/";
const SearchResults = (props) => {
  const [formData, setFormData] = useState({
    Title: "",
    ProgramTypes: "",
  });
  const { Title, ProgramTypes } = formData;

  // we can use this useEffect to (randomly) cycle through "top 5 movies"
  useEffect(() => {
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
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // this will be where we make it dynamic based upon state
  const getItemData = (Title, Program) => {
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
        console.log(response.ProgramMatches);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getItemData(Title, ProgramTypes);
  };

  return (
    <>
      <div className="searchresults">Search Results</div>
      <div className="search">
        <form id="search" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="Title"
            placeholder="ex: Lion King"
            onChange={handleChange}
          />
          <input
            type="text"
            name="ProgramType"
            placeholder="ex: Movie"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
