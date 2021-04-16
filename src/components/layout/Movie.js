import React from "react";

const Movie = ({ Title, Year, Poster }) => {
  // { const data = Summary.Image}

  // imageReq(Summary.Image.FilePath);
  return (
    <div className="movie">
      <h1>{Title}</h1>
      <h2>{Year}</h2>
      <div>
        <img src={Poster} alt={Title} />
      </div>
      {/* <h2>Released {Year}</h2>
      <h2>Rating: {IvaRating}</h2> */}
      {/* <h2>{newRes}</h2> */}
      {/* <h2>{Summary.Description.Description}</h2> */}
      {/* <img src={} /> */}
    </div>
  );
};

// const imageReq = (FilePath) => {
//   fetch(
//     `https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/Images/${FilePath}/Redirect?Redirect=True`,
//     {
//       mode: "no-cors",
//       credentials: "same-origin",
//       redirect: "follow",
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         "x-rapidapi-key": "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
//         "x-rapidapi-host":
//           "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
//       },
//     }
//   )
//     .then((response) => console.log(response))
//     .catch((err) => {
//       console.error(err);
//     });
// };

export default Movie;
