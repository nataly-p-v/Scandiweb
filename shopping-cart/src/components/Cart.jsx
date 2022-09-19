import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";

function Cart({cartItems, selectedOption, attributeMap, attributeMapArr}) {
      const [selectedAttrId, setSelectedAttrId] = useState(null);
      let [itemQuantity, setItemQuantity] = useState(1);
              useEffect(() => {
              attributeMap.forEach((i) => {
                  setSelectedAttrId(i);
              })
              console.log(attributeMapArr)
              }, []);
        return (
        <div>
         <h1 className="cart-name">Cart</h1>
            <ul className="main-cart">
                <div className="main-cart__items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
                        <CartItem key={i} item={item} cartItems={cartItems} selectedOption={selectedOption} attributeMap={attributeMap}/>
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