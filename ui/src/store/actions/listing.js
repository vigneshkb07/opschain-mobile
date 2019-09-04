import axios from 'axios';
import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL
  } from '../../constants/sample';

// import { push } from 'connected-react-router';
// axios.defaults.headers.common = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export const listingLoadingTrue = () => ({
    type: FETCH_ORDERS_START,
});

export const listingSuccess = data => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: data,
});

export const listingFailure = err => ({
    type: FETCH_ORDERS_FAIL,
    err,
});

export const getListing = () => dispatch => {
const url = 'https://jsonplaceholder.typicode.com/posts';
  dispatch(listingLoadingTrue());
  axios
    .get(url)
    .then(response => {
     dispatch(listingSuccess(response.data));
    })
    .catch(err => {
      dispatch(listingFailure(err));
    });
};



