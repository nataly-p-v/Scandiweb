import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from '../GraphQL/queries.js';

function GetProducts({onSelectProduct, categoryName, addToCart}) {
   const [products, setProducts] = useState([]);
   const { data } = useQuery(LOAD_PRODUCTS, {
    variables: { category: categoryName },
  });

 useEffect(() => {
    if (data) {
      setProducts(data.category.products)
      console.log(data.category)
    }
  }, [data]);

  return (
    <div>
        {!products ? (<div>Loading...</div>) : (
        <div>
           <h1 className="category-name">{categoryName}</h1>
            <ul className="products-list">
                {products.map(product => (
                    <li key={product.id} className="products-list__item"
                    onClick={() => {
                        if(product.inStock){ onSelectProduct(product)}
                      }}
                    >
                             {!product.inStock && <div className="outStock"> <p>Out of stock</p></div>}
                             <div className="product">
                             <div className="product__btn-wrapper">
                                 <div className="product__img-wrapper">
                                    <img className="product__img" src={product.gallery[0]} alt={product.id}></img>
                                     <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          addToCart(product);
                                          }}
                                      className="product__button">
                                    </button>
                                 </div>
                             </div>
                             <div className="product__bottom">
                             <div className="product__name">{product.name}</div>
                                 <div className="product__price">
                                 <p>
                                  {product.prices[0].currency.symbol}
                                 </p>
                                 <p>
                                  {product.prices[0].amount}
                                 </p>
                                 </div>
                             </div>
                             </div>
                           </li>
                ))}
            </ul>
            </div>
            )}
    </div>
  );
}

export default GetProducts;