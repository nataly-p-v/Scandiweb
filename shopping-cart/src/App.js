import React from "react";
import Products from './components/Products.js';
import store from './store.js';
import {Provider} from "react-redux";



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            product: 'Apollo running short',
            name:'Apollo running short',
            price:'50'
        }
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
        <div className="logo"><img src="" alt="logo"/></div>
        <div className="header-cart">
            <div className="currency">
                    $
             </div>
             <div className="cart-icon">1</div>
        </div>
      </header>
      <main>
        <div className="content">
            <div className="main"><Products products={this.state.product}/></div>
            <div className="sidebar">b</div>
        </div>
      </main>
    </div>
    </Provider>
  );
}
}

export default App;
