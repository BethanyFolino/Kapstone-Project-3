import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_REVIEWS,
    REVIEW_ERROR
} from "./types";

//Get reviews
export const getReviews = () => async dispatch => {
    try {
        const res = await axios.get("/api/posts");

        dispatch({
            type: GET_REVIEWS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REVIEW_ERROR,
            payload: { mesg: err.response.statusText, status: err.response.status },
          });
    }
}