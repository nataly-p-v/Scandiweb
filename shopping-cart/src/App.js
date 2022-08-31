import React from "react";
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import store from './store.js';
import {Provider} from "react-redux";
import data from './data.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            products: data.data.categories[0].products,
            options:[
              '$ USD', '€ EUR', '¥ JPY'
            ],
            defaultOption: '$',
            cartItems: []
        }
    }
            addToCart = (product) => {
            const cartItems = this.state.cartItems.slice();
            let alreadyInCart = false;
            cartItems.forEach(item=>{
                if(item.id === product.id) {
                    item.count++;
                    alreadyInCart = true;
                }
            })
            if(!alreadyInCart) {
                cartItems.push({...product, count:1})
            }
            this.setState({cartItems})
            console.log(cartItems)
            }
            removeFromCart= (product) => {

            }
render() {
  return (
  <Provider store={store}>
    <div className="grid-container">
      <header>
      <div>
        <ul className="category-list">
          <li className="category-list__item"><a href="#" className="category-list__link category-list__link--selected">Men</a></li>
          <li className="category-list__item"><a href="#" className="category-list__link">Women</a></li>
          <li className="category-list__item"><a href="#" className="category-list__link">Kids</a></li>
        </ul>
        </div>
        <div className="logo"><img src="images/logo.svg" alt="logo"/></div>
        <div className="header-cart">
            <div className="currency">
                <Dropdown options={this.state.options} onChange={this._onSelect} value={this.state.defaultOption} placeholder="Select an option" />
             </div>
             <div className="cart-icon"><img src="images/empty_cart.svg" alt="logo"/><Cart cartItems={this.state.cartItems}/></div>
        </div>
      </header>
      <main>
        <div className="content">
            <div className="main"><Products products={this.state.products} addToCart={this.addToCart}/></div>
        </div>
      </main>
    </div>
    </Provider>
  );
}
}

export default App;
