import React, {Component} from 'react';
import { Link} from "react-router-dom";

class CartHeader extends Component {
    render(){
    const {cartItems} = this.props;
        return (
        <div>
         <Link to={'cart/'}>
            <div className="cart-count">
                   {cartItems.length ===0?<div className="cart-count__number">0</div>:
                    <div className="cart-count__number">{cartItems.length}</div>
                   }
            </div>
         </Link>
        </div>
        )
    }
}
export default CartHeader;