import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from '../GraphQL/queries.js'

function GetProducts() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
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

export default GetProducts;