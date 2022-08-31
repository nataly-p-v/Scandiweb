import {
  FETCH_CURRENCIES,
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return { currencyItems: action.payload};
    default:
      return state;
  }
};