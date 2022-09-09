import React, { useState, useEffect } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Header from './components/Header';
import Cart from './components/Cart';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	const [displayCategory, setDisplayCategory] = useState();
	const [displayProduct, setDisplayProduct] = useState();
	const [displayCart, setDisplayCart] = useState();
	let [cartItems, setCartItems] = useState([]);
    let category = !selectedCategoryName ? 'all': selectedCategoryName
    useEffect(() => {
       setDisplayCategory(true);
       setSelectedCategoryName(category)
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
             console.log(displayProduct);
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
                                console.log('added')
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
