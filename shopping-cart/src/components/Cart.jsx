import React, { useState, useEffect } from 'react';
import AttributeCart from "./AttributeCart";

function Cart({cartItems, removeFromCart, selectedOption, handleDecreaseCart, handleIncreaseCart, attributeMap}) {
      const [selectedAttrId, setSelectedAttrId] = useState(null);
      let [itemQuantity, setItemQuantity] = useState(1);
              useEffect(() => {
              attributeMap.forEach((i) => {
                  setSelectedAttrId(i);
              })
              console.log(itemQuantity)
              }, []);
        return (
        <div>
         <h1 className="cart-name">Cart</h1>
            <ul className="main-cart">
                <div className="main-cart__items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
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
                             <button className="product-card__remove" onClick={() => removeFromCart(item)}>X</button>
                        </li>
                     ))
                     : <h1 className="cart-name">0 items added to cart!</h1>
                     }
                </div>
                <div>Tax 21%</div>
                <div>total: </div>
                <div>quantity: {cartItems.length}</div>
                 <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Order')
                      }}
                  className="product-card__button">Order
                </button>
            </ul>
        </div>
        )
}
export default Cart;