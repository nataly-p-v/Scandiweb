import React, { useState, useEffect } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Header from './components/Header';
import Cart from './components/Cart';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	let [cartItems, setCartItems] = useState([]);
	const [isShowCart, setIsShowCart] = React.useState(false);
	const [isShowCategory, setIsShowCategory] = React.useState(false);
	const [isShowProduct, setIsShowProduct] = React.useState(false);

    let category = !selectedCategoryName ? 'all': selectedCategoryName;

    useEffect(() => {
       setSelectedCategoryName(category);
       setIsShowCategory(true);
    }, []);

  return (
    <div className="grid-container">
    <Header cartItems={cartItems}
        onSelectCategory={(category) => {
           setSelectedCategoryName(category.name);
           setIsShowCategory(true);
           setIsShowCart(false);
           setIsShowProduct(false);
          }}
          onSelectCart={() => {
           setIsShowCart(true);
           setIsShowProduct(false);
           setIsShowCategory(false);
          }}
          />

     {selectedCategoryName && (
          <main>
                {isShowCategory &&
                 <GetProducts categoryName={selectedCategoryName} className="products-list__wrapper"
                       onSelectProduct={(product) => {
                           setSelectedProductId(product.id);
                           setIsShowProduct(true);
                           setIsShowCategory(false);
                           setIsShowCart(false);
                         }}
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
                             }}
                   />
                }
                {isShowProduct && selectedProductId &&
                   <Product id={selectedProductId}
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
                }
                {isShowCart &&
                    <Cart cartItems={cartItems}/>
                }
       </main>
    )}
    </div>
  );
};


export default App;
