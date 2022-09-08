import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ALL_PRODUCTS } from '../GraphQL/queries.js';
import { LOAD_TECH_PRODUCTS } from '../GraphQL/queries.js';
import { LOAD_CLOTHES_PRODUCTS } from '../GraphQL/queries.js';

function GetProducts({onSelect,categoryName}) {
   const [products, setProducts] = useState([]);
    const { data } = useQuery(LOAD_ALL_PRODUCTS);

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
                                        <button
                                        onClick={() => onSelect(product)}>select</button></li>
           					))}
           				</ul>
        </ul>
    </div>
  );
}

export default GetProducts;