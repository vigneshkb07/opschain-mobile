import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history } from "../enhancers/middlewares/router";

import listingReducer from './listing';

export default combineReducers({
    router: connectRouter(history),
    listing: listingReducer
});