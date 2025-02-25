// src/store/reducers/denominationReducer.js
import { CALCULATE_DENOMINATIONS, RESET_DENOMINATIONS } from '../action/denominationActions';

const initialState = {
  denominations: {},
};

const denominationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_DENOMINATIONS:
      return {
        ...state,
        denominations: action.payload,
      };
    case RESET_DENOMINATIONS:
      return {
        ...state,
        denominations: {},
      };
    default:
      return state;
  }
};

export default denominationReducer;
