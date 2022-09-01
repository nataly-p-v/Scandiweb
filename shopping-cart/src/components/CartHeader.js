import React, {Component} from 'react';

class CartHeader extends Component {
    render(){
    const {cartItems} = this.props;
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
}
export default CartHeader;