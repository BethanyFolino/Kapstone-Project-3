import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getReviews } from "../../actions/review";

const Reviews = ({ getReviews, review: { reviews, loading }}) => {
    useEffect(() => {
        getReviews();
    }, [getReviews]);
    return (
        <div />
            
       
    )
}

Reviews.propTypes = {
  getPosts: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    review: state.review
})

export default connect(mapStateToProps, { getReviews })(Reviews);
