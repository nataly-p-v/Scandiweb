import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from '../GraphQL/queries.js';
import { Link} from "react-router-dom";

function GetProducts() {
  const { data } = useQuery(LOAD_PRODUCTS);
   const [products, setProducts] = useState([]);
 useEffect(() => {
    if (data) {
      setProducts(data.categories[0].products)
      console.log(data.categories[0].products)
    }
  }, [data]);
      const result = products.map((obj, i) => {
            return <li key={i} className="products-list__item">
             <Link to={'product/' + obj.name} className="product-list__link">{obj.name}</Link>
            </li>;
         });

  return (
    <div>
        <ul className="products-list">
           {result}
        </ul>
    </div>
  );
}

export default GetProducts;