import React, { useState, useEffect } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Cart from './components/Cart';
import logo from './logo.svg';
import GetCurrencies from "./components/getCurrencies";
import GetCategories from "./components/getCategories";
import CartHeader from "./components/CartHeader";

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	let [cartItems, setCartItems] = useState([]);
	const [isShowCart, setIsShowCart] = React.useState(false);
	const [isShowCategory, setIsShowCategory] = React.useState(false);
	const [isShowProduct, setIsShowProduct] = React.useState(false);
	const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    let defaultCategory = !selectedCategoryName ? 'all': selectedCategoryName;
    const [attributeMap, setAttributeMap] = useState(new Map());
    const [attribute, setAttribute] = useState();
    let [attributeMapArr, setAttributeMapArr] = useState([])
    useEffect(() => {
       setSelectedCategoryName(defaultCategory);
       setIsShowCategory(true);
    }, []);

  return (
    <div className="grid-container">
           <header>
                        <div>
                           <GetCategories defaultCategory={defaultCategory}
                                onSelectCategory={(category) => {
                                    setSelectedCategoryName(category.name);
                                    setIsShowCategory(true);
                                    setIsShowCart(false);
                                    setIsShowProduct(false);
                           }}/>
                          </div>
                          <div className="logo"> <img src={logo} alt="Logo" /></div>
                          <div className="header-cart">
                             <div className={`currency ${isOpen ? "is-open" : ""}`} onClick={() => {setIsOpen(!isOpen)}}>
                                   <div className="currency-header"> {selectedOption || "$"}<div className="arrow"></div></div>
                                       <GetCurrencies
                                           onOptionClicked={(value) => {
                                              setSelectedOption(value);
                                              console.log(value)
                                              setIsOpen(!isOpen);
                                            }}/>
                                        </div>
                               <div className="cart-icon"
                                  onClick={() => {
                                     setIsShowCart(true);
                                     setIsShowProduct(false);
                                     setIsShowCategory(false);
                                  }}><img src="images/empty_cart.svg" alt="logo"/>
                                  <CartHeader cartItems={cartItems}/></div>
                          </div>
           </header>
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
                           cartItems.push({...product, count:1})

                           cartItems.forEach(item=>{
                           console.log('productId'+product.id)
                           console.log('itemId'+item.id)
                               if(item.id === product.id) {
                                   item.count++;
                                   console.log(item.count)

                               } else {
                                cartItems.push({...product, count:1})
                                item.count++;
                               }
                           })
                           setCartItems(cartItems);
                             }}
                   />
                }
                {isShowProduct && selectedProductId &&
                   <Product id={selectedProductId} selectedOption={selectedOption || "$"} attributeMap={attributeMap}
                     addToCart={(product) => {
                       cartItems = cartItems.slice();
                       attributeMapArr = attributeMapArr.slice();

                       cartItems.forEach(item=>{
                           if(item.id === product.id) {
                               item.count++;
                           }
                       })
                       attributeMapArr.push({attribute})
                      setAttributeMapArr(attributeMapArr)
                       setAttributeMap(new Map());
                      console.log(attributeMapArr)

                       cartItems.push({...product, count:1})
                       setCartItems(cartItems);

                     }}
                     onSelectAttribute={(attr, value, productId, attributesNumber) => {
                        console.log(attributesNumber)
                        let attribute={};
                        if(attributesNumber>1) {
                             attribute = {
                             id: productId,
                             attributeSet : attributeMap.set(attr, value)
                            }
                            setAttribute(prevState => attribute);
                            console.log(attribute);
                        } else {
                             attribute = {
                             id: productId,
                             attributeSet : {
                                attr: attr,
                                value: value
                             }
                            }
                            setAttribute(prevState => attribute);
                            console.log(attribute)
                        }
                     }}
                     />
                }
                {isShowCart &&
                    <Cart cartItems={cartItems} selectedOption={selectedOption || "$"} attributeMap={attributeMap} attributeMapArr={attributeMapArr}
                    />
                }
       </main>
    )}
    </div>
  );
};


export default App;
