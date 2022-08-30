import React from "react";
import Products from './components/Products.js'

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
    <div className="grid-container">
      <header>
      <div>
        <ul class="category-list">
          <li class="category-list__item"><a href="#" class="category-list__link category-list__link--selected">Men</a></li>
          <li class="category-list__item"><a href="#" class="category-list__link">Women</a></li>
          <li class="category-list__item"><a href="#" class="category-list__link">Kids</a></li>
        </ul>
        </div>
        <div class="logo"><img src="" alt="logo"/></div>
        <div class="header-cart">
            <div class="currency">
                    $
             </div>
             <div class="cart-icon">1</div>
        </div>
      </header>
      <main>
        <div className="content">
            <div className="main"><Products products={this.state.product}/></div>
            <div className="sidebar">b</div>
        </div>
      </main>
    </div>
  );
}
}

export default App;
