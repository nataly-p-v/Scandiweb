import React from 'react';

function CartHeader({cartItems}) {
console.log(cartItems)
        return (
        <div>
            <div className="cart-count">
                   {cartItems.length ===0?<div className="cart-count__number">0</div>:
                    <div className="cart-count__number">{cartItems.length}</div>
                   }
            </div>
        </div>
        )
}
export default CartHeader;