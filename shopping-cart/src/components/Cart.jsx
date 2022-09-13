import React from 'react';

function Cart({cartItems, removeFromCart, selectedOption, handleDecreaseCart, handleIncreaseCart}) {
console.log(selectedOption)
        return (
        <div>
         <h1 className="cart-name">Cart</h1>
            <ul className="main-cart">
                <div className="main-cart__items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
                        <li className="main-cart__item"key={item.id}>
                             <h2 className="main-cart__items-name">{item.name}</h2>
                             <h3>{item.brand}</h3>
                             <div className="main-cart__items-qty">{item.count}</div>
                             <ul className="product-card__prices">
                        {
                                (item.prices.map((price,i) => {
                                     return (price.currency.symbol === selectedOption) ? <li key={Math.random()}>
                                     {price.amount} {price.currency.symbol} </li> : '';
                                  })) }
                             </ul>
                             <ul className="product-card__attributes">
                         {
                                 (item.attributes.map((attr,i) => {
                                      return <li key={Math.random()} className="product-card__attributes-item">
                                      {attr.name}
                                         {(attr.items.map((attrItem,i) => {
                                                      return <div key={Math.random()} className="product-card__attributes-value">
                                                      {attrItem.displayValue}

                                                      </div> ;
                                                   })) }
                                      </li> ;
                                   })) }
                             </ul>
                             <div className="product-card__img"><img src={item.gallery[0]} alt="product"></img></div>
                             <div className="cart-product-quantity">
                                 <button onClick={() => handleDecreaseCart(item)}>
                                   -
                                 </button>
                                 <div className="count">{cartItems.length}</div>
                                 <button onClick={() => handleIncreaseCart(item)}>+</button>
                             </div>

                            <button onClick={() => removeFromCart(item)}>remove</button>
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