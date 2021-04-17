import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deleteReview } from "../../actions/review";

const ReviewItem = ({
  addLike,
  removeLike,
  deleteReview,
  auth,
  review: { _id, text, name, user, likes, comments, date },
}) => {
  return (
    <div>
      <div>{name}</div>
      <p>{text}</p>
      <p>
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
      <button onClick={(e) => addLike(_id)}>
        {likes.length > 0 ? <span>{likes.length}</span> : 0} likes
      </button>

      <button onClick={(e) => removeLike(_id)}>Remove Like</button>
      <Link to={`/posts/${_id}`}>
        {comments.length > 0 && <span>{comments.length}</span>}
      </Link>
      <button>Discussion</button>
      {!auth.loading && user === auth.user._id && (
        <button onClick={(e) => deleteReview(_id)}>Delete</button>
      )}
      <div>{}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deleteReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deleteReview })(
  ReviewItem
);
