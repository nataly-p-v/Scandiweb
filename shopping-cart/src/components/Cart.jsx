import React from 'react';

function Cart({cartItems, removeFromCart}) {
        return (
        <div>
            <div className="cart">
                <div className="cart-items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
                        <li key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.prices[0].amount}</div>
                            <div>{item.count}</div>
                            <div>{item.prices[0].amount*item.count}</div>
                            <button onClick={() => removeFromCart(item)}>remove</button>
                        </li>
                     ))
                     : 'empty cart'
                     }
                </div>
                <div>total: {/*cartItems.reduce((a,c)=> a+(c.price[c].amount*c.count),0)*/}</div>
            </div>
        </div>
        )
}
export default Cart;