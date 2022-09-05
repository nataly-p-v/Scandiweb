import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CartHeader from '../components/CartHeader.js';
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        return (
              <header>
              <div>
                <ul className="category-list">
                  <li className="category-list__item"><a href="#" className="category-list__link category-list__link--selected">Men</a></li>
                  <li className="category-list__item"><a href="#" className="category-list__link">Women</a></li>
                  <li className="category-list__item"><a href="#" className="category-list__link">Kids</a></li>
                </ul>
                </div>
                <div className="logo"> <Link to="/"><img src="images/logo.svg" alt="logo"/></Link></div>
                <div className="header-cart">
                    <div className="currency">
                        <Dropdown options={this.props.options} onChange={this._onSelect} value={this.props.defaultOption} placeholder="Select an option" />
                     </div>
                     <div className="cart-icon"><img src="images/empty_cart.svg" alt="logo"/><CartHeader cartItems={this.props.cartItems}/></div>
                </div>
              </header>
        )
    }
}
export default Header;