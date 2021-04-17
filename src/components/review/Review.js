import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReviewItem from "../reviews/ReviewItem";
import { getReview } from "../../actions/review";

const Review = ({ getReview, review: { review, loading }, match }) => {
  useEffect(() => {
    getReview(match.params.id);
  }, [getReview]);

  return <Fragment><ReviewItem review={review} showActions={false}/></Fragment>
};

Review.propTypes = {
  getReview: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getReview })(Review);
