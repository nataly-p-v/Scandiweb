import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CATEGORIES } from '../GraphQL/queries.js'

function GetCategories() {
  const { error, loading, data } = useQuery(LOAD_CATEGORIES);
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

export default GetCategories;