import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL
  } from '../../constants/sample';
  
  const initialState = {
    data: [],
    loading: false,
  };
  
  const listingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ORDERS_START:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ORDERS_SUCCESS:
            return {
              ...state,
              data: action.payload,
              loading: false,
            };
      case FETCH_ORDERS_FAIL:
        return {
          ...state,
          loading: false,
        };
    default:
        return state;
    }
  };
  export default listingReducer;
  