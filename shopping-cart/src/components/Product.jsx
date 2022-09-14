import React, { useEffect, useState } from 'react';
import { useQuery} from "@apollo/client";
import { LOAD_PRODUCT } from '../GraphQL/queries.js';

function Product({id, addToCart, selectedOption, onSelectAttribute}) {
   const [product, setProduct] = useState([]);
   const [mainImg, setMainImg] = useState([]);
   const { data } = useQuery(LOAD_PRODUCT, {
          variables: {
              id: id,
          },
      });
    useEffect(() => {
        if (data) {
            setProduct(data.product)
            console.log(data.product)
            setMainImg(data.product.gallery[0])
        }
    }, [data]);

  const attributes = (product.attributes) ?
       (product.attributes.map((attr,i) => {
            return <li key={Math.random()} className="attributes__item"> <span className="attributes__item-name">{attr.name}</span>
                       <div className="attributes__item-values">
                           {(attr.items.map((item,i) => {
                            return <div key={Math.random()} onClick={(e) => {onSelectAttribute([attr.name, item.displayValue])}}>
                                   <div className="attributes__item-value-center">{item.displayValue}</div></div>;
                             }))}
                       </div>
                    </li>;
         })) : '';

   const thumbnails = (product.gallery) ?
        (product.gallery.map((image,i) => {
             return <div key={Math.random()} className="product-card__thumbnail"  onClick={(e) => { setMainImg (image)}}>
                        <img src={image} alt="product"></img>
                     </div>;

          })) : '';
   const prices = (product.prices) ?
        (product.prices.map((price,i) => {
             return <li key={Math.random()} className="prices__item">
             {(price.currency.symbol === selectedOption) ? price.amount+ price.currency.symbol : ''}</li>;
          })) : '';

    return (
        <div>
                {!product ? (<div>Loading...</div>) : (
                    <div className="product-card">
                        <div className="product-card__wrapper" >
                                 <div className="product-card__item">
                                     <div className="product-card__photo-section">
                                        <section className="product-cart__thumb-wrapper">
                                            <aside className="product-card__thumbnails">
                                                {thumbnails}
                                            </aside>
                                             <aside className="product-card__photo">
                                                <img src={mainImg} alt={product.id}></img>
                                             </aside>
                                        </section>
                                     </div>
                                     <div className="product-card__info">
                                         <h1>{product.name}</h1>
                                         <h2>{product.brand}</h2>
                                         <ul className="product-card__atrributes">
                                             {attributes}
                                         </ul>
                                         <ul className="product-card__prices">
                                         <span className="attributes__item-name">Price:</span>
                                             {prices}

                                         </ul>
                                         <button
                                             onClick={(e) => {
                                               e.stopPropagation();
                                               addToCart(product);
                                               }}
                                           className="product-card__button"> Add to Cart
                                         </button>
                                         <div>
                                         <div className="product-card__description" dangerouslySetInnerHTML={{__html: product.description}}/></div>
                                     </div>
                                 </div>
                               </div>
                        </div>
                    )}
            </div>
    )
}
export default Product;