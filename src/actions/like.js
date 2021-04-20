import axios from 'axios';
import { setAlert } from './alert';
import {
    ADD_LIKE_MOVIE,
    LIKE_MOVIE_ERROR,
} from './types';

// Like a movie

export const likeMovie = () => async (dispatch) => {
    try {
        const res = await axios.post('/api/like');

        dispatch({
            type: ADD_LIKE_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LIKE_MOVIE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
          });
    }
}