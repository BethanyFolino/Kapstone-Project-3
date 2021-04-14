import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { initialMovies } from "../../actions/movies";
import SearchResults from "../layout/SearchResults";
// import axios from "axios";

const entUrl =
  "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/";
const Dashboard = (props) => {
  const [initialMovies, setInitialMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/?Title=Lion%20King&ProgramType=Movie",
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
        //deconstruct response
        //deconstruct.json()
        //setInitialMovies(deconstruct);
        console.log(response);
        response.json().then((data) => {
          setInitialMovies(data.ProgramMatches);
          console.log(data.ProgramMatches);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div className="dashboard">Dashboard</div>
      {/* <div className="initial-movies">{initialMovies.map((movie) => { 
        return (<div>{movie.Score}</div>)
      })}</div> */}
      {initialMovies.map((movie) => {
        return movie.Title;
      })}
      <div className="search">
        <SearchResults />
      </div>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

// const options = {
//   method: "GET",
//   url:
//     "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
//   params: { Title: { formData }, ProgramTypes: { formData } },
//   headers: {
//     "content-type": "application/json",
//   },
// };

// axios request

// const options = {
//   headers: {
//     "content-type": "application/json",
//     "x-rapidapi-key": "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
//     "x-rapidapi-host":
//       "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
//   },
// };
// try {
//   const response = await axios.get(entUrl + formData, options);
//   console.log(response);
//   return response;
// } catch (error) {
//   console.log("Incorrect");
// }
// .then(function (response) {
//   // const res = response;

//   return JSON.stringify(response);
// });
