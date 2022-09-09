import React from 'react';
import 'react-dropdown/style.css';
import GetCurrencies from "../components/getCurrencies";
import GetCategories from "../components/getCategories";
import CartHeader from "../components/CartHeader";
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header({onSelectCategory, cartItems}) {
        return (
              <header>
              <div>
                 <GetCategories onSelectCategory={onSelectCategory}/>
                </div>
                <div className="logo"> <Link to="/"><img src={logo} alt="Logo" /></Link></div>
                <div className="header-cart">
                    <GetCurrencies/>
                     <div className="cart-icon"><Link to="/cart"><img src="images/empty_cart.svg" alt="logo"/> <CartHeader cartItems={cartItems}/></Link></div>
                </div>
              </header>
        )
}

export default Header;