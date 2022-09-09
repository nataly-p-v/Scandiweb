import React, { useState, useEffect } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Header from './components/Header';
import Cart from './components/Cart';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	const [displayCategory, setDisplayCategory] = useState(true);
	const [displayProduct, setDisplayProduct] = useState(false);
	const [displayCart, setDisplayCart] = useState(false);
	let [cartItems, setCartItems] = useState([]);
    let category = !selectedCategoryName ? 'all': selectedCategoryName
    useEffect(() => {
       setDisplayCategory(true);
       setSelectedCategoryName(category)
                    console.log(displayCategory+' displayCategory');
                    console.log(displayProduct+' displayProduct');
                    console.log(displayCart+' displayCart');
    }, []);

  return (
    <div className="grid-container">
    <Header cartItems={cartItems}
        onSelectCategory={(category) => {
           setSelectedCategoryName(category.name);
           setDisplayCategory(true);
           setDisplayProduct(false);
           setDisplayCart(false);
          }}
          onSelectCart={() => {
             setDisplayCategory(false);
            setDisplayProduct(false);
             setDisplayCart(true);
             console.log('onSelectCart');
             console.log(displayCategory+' displayCategory');
             console.log(displayProduct+' displayProduct');
             console.log(displayCart+' displayCart');
            }}
          />

     {selectedCategoryName && (
          <main>
            <div className="content">
                <div className="main">
                <div className={`${displayCategory ? "visible" : "hidden"}`}>
                    <GetProducts categoryName={selectedCategoryName}
                        onSelect={(product) => {
                            setSelectedProductId(product.id);
                            setDisplayProduct(true);
                            setDisplayCategory(false);
                            setDisplayCart(false);
                          }}
                              addToCart={(product) => {
                                console.log(product)
                                cartItems = cartItems.slice();
                                let alreadyInCart = false;
                                cartItems.forEach(item=>{
                                    if(item.id === product.id) {
                                        item.count++;
                                        alreadyInCart = true;
                                    }
                                })
                                if(!alreadyInCart) {
                                    cartItems.push({...product, count:1})
                                    setCartItems(cartItems);
                                    console.log(cartItems)
                                }
                              }}
                    />
                    </div>
                    {selectedProductId && (
                        <div>
                            <Product id={selectedProductId} className={`${displayProduct ? "visible" : "hidden"}`}
                              addToCart={(product) => {
                                cartItems = cartItems.slice();
                                let alreadyInCart = false;
                                cartItems.forEach(item=>{
                                    if(item.id === product.id) {
                                        item.count++;
                                        alreadyInCart = true;
                                    }
                                })
                                if(!alreadyInCart) {
                                    cartItems.push({...product, count:1})
                                    setCartItems(cartItems);
                                }
                              }}/>
                        </div>
                    )}
                </div>
                <div className={`${displayCart ? "visible" : "hidden"}`}>
                    <Cart cartItems={cartItems}/>
                </div>
            </div>
          </main>
    )}
    </div>
  );
};


export default App;
