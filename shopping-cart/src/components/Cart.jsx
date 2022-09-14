import React, { useState } from 'react';

function Cart({cartItems, removeFromCart, selectedOption, handleDecreaseCart, handleIncreaseCart}) {
   const [selectedAttribute, setSelectedAttribute] = useState([]);
        return (
        <div>
         <h1 className="cart-name">Cart</h1>
            <ul className="main-cart">
                <div className="main-cart__items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
                        <li className="main-cart__item"key={item.id}>
                        <div>
                            <h2 className="main-cart__items-name">{item.name}</h2>
                            <h3>{item.brand}</h3>
                             <ul className="product-card__prices">
                                {(item.prices.map((price,i) => {
                                     return (price.currency.symbol === selectedOption) ? <li className="prices__item" key={Math.random()}>
                                     {price.currency.symbol}{price.amount}  </li> : '';
                                  }))}
                             </ul>
                             <div className="main-cart__items-qty">{item.count}</div>
                              <div className="product-card__attributes">
                                 {(item.attributes.map((attr,i) => {
                                       return <div key={Math.random()} className="product-card__attributes-item">
                                                <span className="attributes__item-name">{attr.name}</span>
                                                <div className="attributes__item-values">
                                                    {(attr.items.map((attrItem,i) => {
                                                       return <div key={Math.random()} onClick={(e) => { setSelectedAttribute(item.displayValue);console.log(item.displayValue)}}
                                                              className={`attributes__item-value ${selectedAttribute === item.displayValue ? ' attributes__item-value--selected' : ''}`}>
                                                              <div className="attributes__item-value-center">{attrItem.displayValue}</div>

                                                       </div> ;
                                                    })) }
                                                 </div>
                                       </div> ;
                                    }))}
                              </div>
                        </div>
                             <div className="cart-product-quantity">
                                 <button className="cart-product-plus"onClick={() => handleIncreaseCart(item)}>+</button>
                                 <div className="count">{cartItems.length}</div>
                                 <button className="cart-product-minus" onClick={() => handleDecreaseCart(item)}>-</button>

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