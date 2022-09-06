import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CURRENCIES } from '../GraphQL/queries.js'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function GetCurrencies() {
  const { error, loading, data } = useQuery(LOAD_CURRENCIES);
  const [currencies, setCurrencies] = useState([]);
 useEffect(() => {
    if (data) {
     console.log(data.currencies)
     setCurrencies(data.currencies)
    }
  }, [data]);

 /* const result = currencies.map((obj,i) => {
        return <li key={obj.symbol} className="currencies__item">
           {obj.label}{obj.symbol}
        </li>;
     });*/

  return (
  <Dropdown className="currency" options={currencies} value={currencies[0]} placeholder="Select an option" />
  );
}

export default GetCurrencies;
