import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from '../GraphQL/queries.js';

function GetProducts({onClick, onSelect, categoryName, isVisible, addToCart}) {
   const [products, setProducts] = useState([]);
   const { data } = useQuery(LOAD_PRODUCTS, {
    variables: { category: categoryName },
  });

 useEffect(() => {
    if (data) {
      setProducts(data.category.products)
    }
  }, [data]);

  return (
    <div>
        {!products ? (<div>Loading...</div>) : (
            <ul className="products-list">
                {products.map(product => (
                    <li key={product.id} className="products-list__item" onClick={() => onSelect(product)}>
                             {!product.inStock && <div className="outStock">Out of stock</div>}
                             <div className="product">
                              <img src={product.gallery[0]} alt={product.id}></img>
                                <div
                                 dangerouslySetInnerHTML={{__html: product.description}}
                               />
                                <div className="product-price">
                                 {product.prices[0].amount}

                                </div>
                                <button
                                  onClick={() => addToCart(product)}
                                  className="product-button">
                                </button>
                             </div>
                           </li>
                ))}
            </ul>
            )}
    </div>
  );
}

export default GetProducts;