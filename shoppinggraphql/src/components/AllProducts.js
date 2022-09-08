import React from 'react';
import * as GetAllProducts from '../graphql/GetAllProducts.graphql';
import { useQuery } from "@apollo/client";

function AllProducts() {
	/*const { data, loading } = useQuery(GetAllProducts);*/
	  const { data } = useQuery(GetAllProducts);
  return (
    <div className="App">
      <header className="App-header">
       <div>
            <h1>GetAllProducts</h1>
       </div>
      </header>
    </div>
  );
}
export default AllProducts;