import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CartHeader from '../components/CartHeader.js';
import { Link } from "react-router-dom";
import GetCurrencies from "../components/getCurrencies";
import GetCategories from "../components/getCategories";

class Header extends Component {
    render(){
        return (
              <header>
              <div>
                 <GetCategories/>
                </div>
                <div className="logo"> <Link to="/"><img src="images/logo.svg" alt="logo"/></Link></div>
                <div className="header-cart">
                    <GetCurrencies/>
                     <div className="cart-icon"><img src="images/empty_cart.svg" alt="logo"/><CartHeader cartItems={this.props.cartItems}/></div>
                </div>
              </header>
        )
    }
}
export default Header;