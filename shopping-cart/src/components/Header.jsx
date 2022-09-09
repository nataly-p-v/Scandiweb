import React from 'react';
import 'react-dropdown/style.css';
import GetCurrencies from "../components/getCurrencies";
import GetCategories from "../components/getCategories";
import CartHeader from "../components/CartHeader";
import logo from '../logo.svg';

function Header({onSelectCategory, cartItems, onSelectCart}) {
        return (
              <header>
              <div>
                 <GetCategories onSelectCategory={onSelectCategory}/>
                </div>
                <div className="logo"> <img src={logo} alt="Logo" /></div>
                <div className="header-cart">
                    <GetCurrencies/>
                     <div className="cart-icon"
                                         onClick={() => {
                                         console.log('cart')
                                             onSelectCart();
                                           }}
                     ><img src="images/empty_cart.svg" alt="logo"/> <CartHeader cartItems={cartItems}/></div>
                </div>
              </header>
        )
}

export default Header;