import { GET_REVIEWS, REVIEW_ERROR, UPDATE_LIKES } from "../actions/types";

const initialState = {
  reviews: [],
  review: null,
  loading: true,
  error: {},
};

export default function review(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
          ...state,
          reviews: state.reviews.map(review => review._id === payload.id ? { ...review, likes:
          payload.likes } : review),
          loading: false
      }
    default:
      return state;
  }
}
