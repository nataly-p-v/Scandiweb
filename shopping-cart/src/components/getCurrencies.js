import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CURRENCIES } from '../GraphQL/queries.js'

function GetCurrencies() {
  const { error, loading, data } = useQuery(LOAD_CURRENCIES);
 useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data]);

  return (
    <div>

    </div>
  );
}

export default GetCurrencies;