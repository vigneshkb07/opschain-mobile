import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


import router from "./router";

const middlewares = [
    router,
    thunk,
    createLogger()
];

export default applyMiddleware(...middlewares);
