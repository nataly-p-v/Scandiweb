import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from '../GraphQL/queries.js';

function GetProducts({onSelect,categoryName}) {
   const [products, setProducts] = useState([]);
   const { data } = useQuery(LOAD_PRODUCTS, {
    variables: { category: categoryName },
  });

 useEffect(() => {
    if (data) {
      setProducts(data.category.products)
      console.log(data.category.products)
    }
  }, [data]);

  return (
    <div>
        <ul className="products-list">
            <ul>
                {products.map(product => (
                    <li key={product.name} className="products-list__item">
                             <span data-attr={'product/' + product.name} className="product-list__link">{product.name}</span>
                            <button onClick={() => onSelect(product)}>select</button></li>
                ))}
            </ul>
        </ul>
    </div>
  );
}

export default GetProducts;