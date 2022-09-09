import React, { useEffect, useState } from 'react';
import { useQuery} from "@apollo/client";
import { LOAD_PRODUCT } from '../GraphQL/queries.js';

function Product({id}) {
   const [product, setProduct] = useState([]);
   const { data } = useQuery(LOAD_PRODUCT, {
          variables: {
              id: id,
          },
      });
    useEffect(() => {
        if (data) {
            setProduct(data.product)
            console.log(data.product)
        }
    }, [data]);

  const attributes = (product.attributes) ?
       (product.attributes.map((attr,i) => {
            return <li key={i} className="attributes__item"> {attr.name} {attr.type}
                       {(attr.items.map((item,i) => {
                            return <div key={i} className="attributes__value"> {item.displayValue}</div>;
                         }))}
            </li>;
         })) : '';
   const prices = (product.prices) ?
        (product.prices.map((price,i) => {
             return <li key={i} className="prices__item">{price.amount} {price.currency.symbol} {price.currency.label}</li>;
          })) : '';

    return (
        <div>
                {!product ? (<div>Loading...</div>) : (
                    <ul className="products-list">
                        <li key={id} className="product-list__item" >
                                 {!product.inStock && <div className="outStock">Out of stock</div>}
                                 <div className="product">
                                    <img src={product.gallery} alt={product.id}></img>
<div>{product.brand}</div>
<div>{product.category}</div>
<div>{product.description}</div>
<div>{product.inStock}</div>
<div>{product.name}</div>
<ul className="atrributes-list">
    {attributes}
</ul>
<ul className="prices-list">
    {prices}
</ul>


                                 </div>
                               </li>
                        </ul>
                    )}
            </div>
    )
}
export default Product;