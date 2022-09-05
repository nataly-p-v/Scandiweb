import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CURRENCIES } from '../GraphQL/queries.js'

function GetCurrencies() {
  const { error, loading, data } = useQuery(LOAD_CURRENCIES);
  const [currencies, setCurrencies] = useState([]);
 useEffect(() => {
    if (data) {
     console.log(data.currencies)
     setCurrencies(data.currencies)
    }
  }, [data]);

  const result = currencies.map((obj) => {
        return <p key={obj.id}>
           {obj.label}{obj.symbol}
        </p>;
     });

  return (
    <div>
      {result}
    </div>
  );
}

export default GetCurrencies;