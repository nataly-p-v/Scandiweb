import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CURRENCIES } from '../GraphQL/queries.js'

function GetCurrencies({onOptionClicked}) {
  const { data } = useQuery(LOAD_CURRENCIES);
  const [currencies, setCurrencies] = useState([]);

 useEffect(() => {
    if (data) {
     setCurrencies(data.currencies)
    }
  }, [data]);

     const currenciesArr = (currencies) ?
          (currencies.map((currency,i) => {
               return <li key={Math.random()} className="currency-dropdown__item"
                                    onClick={() => {
                                        onOptionClicked(currency.symbol);
                                      }}
                                      >
              {currency.label}{currency.symbol}</li>;
            })) : '';

  return (
             <ul className="currency-dropdown">
              {currenciesArr}
             </ul>

  );
}

export default GetCurrencies;
