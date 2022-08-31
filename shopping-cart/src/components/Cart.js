import React, {Component} from 'react';

class Cart extends Component {
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
            <div className="cart">
                <div className="cart-items">
                     {cartItems.map((item, i) => (
                        <li key={item.id}>
                            <div>{item.name}</div>
                            <button onClick={() => this.props.removeFromCart()}>remove</button>
                        </li>
                     ))}
                </div>
            </div>
        </div>
        )
    }
}
export default Cart;