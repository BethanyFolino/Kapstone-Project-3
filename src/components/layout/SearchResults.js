import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
// import Reviews from "../reviews/Reviews";

// for testings
// import { connect } from "react-redux";
// import ReviewItem from "../reviews/ReviewItem";
// import { getReviews } from "../../actions/review";
// import ReviewForm from "../reviews/ReviewForm";

// import Reviews from "../reviews/Reviews";
// import axios from "axios";

const SearchResults = (props) => {
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
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getItemData(Search);
  };

  // const getReviewData = (Search) => {
  //   const Reviews = ({ getReviews, review: { reviews, loading } }) => {
  //     useEffect(() => {
  //       getReviews();
  //     }, [getReviews]);
  //   };
  return (
    <Fragment>
      <div className="searchresults">
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
      {/* testing */}
      {/* <ReviewForm /> */}
      {/* <div className="reviews">
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div> */}
      {/* <Reviews /> */}
    </Fragment>
  );
};
// };

// Reviews.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   review: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   review: state.review,
// });

SearchResults.propTypes = {};

// export default connect(mapStateToProps, { getReviews })(SearchResults);

export default SearchResults;
