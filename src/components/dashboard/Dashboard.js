import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import SearchResults from "../layout/SearchResults";

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard">
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
