import React from "react";
import Header from './components/Header.js';
import Products from './components/Products.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import store from './store.js';
import {Provider} from "react-redux";
import data from './data.json';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";


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
                const cartItems = this.state.cartItems.slice();
                console.log(product)
                this.setState({cartItems:cartItems.filter(x=>x.id !==product.id)})

            }
render() {
  return (
  <Provider store={store}>
   <BrowserRouter>
    <div className="grid-container">
    <Header options={this.state.options} value={this.state.defaultOption} cartItems={this.state.cartItems}/>
      <main>
        <div className="content">
            <div className="main">
               <Routes>
                <Route path="/cart" element={<Cart cartItems={this.state.cartItems} removeFromCart={this.state.removeFromCart}/>}></Route>
                <Route path="product/:id" element={<Product animate={true}/>}></Route>
                <Route path="/" element={<Products products={this.state.products} addToCart={this.addToCart}/>}></Route>
               </Routes>
            </div>
        </div>
      </main>
    </div>
     </BrowserRouter>
    </Provider>
  );
}
}

export default App;
