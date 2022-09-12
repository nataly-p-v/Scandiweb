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

    let defaultCategory = !selectedCategoryName ? 'all': selectedCategoryName;

    useEffect(() => {
       setSelectedCategoryName(defaultCategory);
       setIsShowCategory(true);
    }, []);

  return (
    <div className="grid-container">
    <Header cartItems={cartItems}
        defaultCategory={defaultCategory}
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
                 <GetProducts categoryName={selectedCategoryName}
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
