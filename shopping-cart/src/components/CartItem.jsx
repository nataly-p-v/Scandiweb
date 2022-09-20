import React, { useState, useEffect } from 'react';
import AttributeCart from "./AttributeCart";

function CartItem({item, cartItems, selectedOption, attributeMap, filteredAttributes}) {
      const [selectedAttrId, setSelectedAttrId] = useState(null);
      let [itemQuantity, setItemQuantity] = useState(1);
              useEffect(() => {
              attributeMap.forEach((i) => {
                  setSelectedAttrId(i);
              })
              console.log(filteredAttributes)
              }, []);
        return (
        <div>
            <li className="main-cart__item" key={Math.random()}>
            <div>
                <h2 className="main-cart__items-name">{item.name}</h2>
                <h3>{item.brand}</h3>
                 <ul className="product-card__prices">
                    {(item.prices.map((price,i) => {
                         return (price.currency.symbol === selectedOption) ? <li className="prices__item" key={Math.random()}>
                         {price.currency.symbol}{price.amount}  </li> : '';
                      }))}
                 </ul>
                  <div className="product-card__attributes">
                     {(item.attributes.map((attr,i) => {
                           return <div key={Math.random()} className="product-card__attributes-item">
                                    <span className="attributes__item-name">{attr.name}</span>
                                    <div className="attributes__item-values">
                                        <AttributeCart
                                        attr={attr} attributeMap={attributeMap} attrName={attr.name} selectedAttrId={selectedAttrId} />
                                     </div>
                           </div> ;
                        }))}
                  </div>
            </div>
                 <div className="cart-product-quantity">
                     <button className="cart-product-plus"onClick={() => {setItemQuantity(itemQuantity+1)}}>+</button>
                     <div className="count">{itemQuantity}</div>
                     <button
                     className={`cart-product-minus ${(itemQuantity<=1)  ? ' v-hidden' : 'v-visible'}`}
                     onClick={() => setItemQuantity(itemQuantity-1)}>-</button>
                 </div>
                 <div className="product-card__img"><img src={item.gallery[0]} alt="product"></img></div>
                 <button className="product-card__remove" onClick={() => console.log(item)}>X</button>
            </li>
        </div>
        )
}
export default CartItem;