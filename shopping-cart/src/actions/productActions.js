//import { FETCH_CURRENCIES } from "../types";

var query = `query { currencies{ label } }`;

export const fetchCurrencies = async function getCurrencies(dispatch) {
    let results = await fetch('http://localhost:4000/graphql', {
      method: 'POST',

      headers: {
        "Content-Type": "application/json"
      },

    body: JSON.stringify({
        query
      })
    })
    let currencies = await results.json();
    console.log(currencies.data)
//    dispatch({
//        type: FETCH_CURRENCIES,
//        payload: currencies.data,
//      });
  }
