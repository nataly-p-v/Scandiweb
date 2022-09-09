import React, { useState, useEffect } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Header from './components/Header';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	const [displayCategory, setDisplayCategory] = useState();
	const [displayProduct, setDisplayProduct] = useState();
    let category = !selectedCategoryName ? 'all': selectedCategoryName
      useEffect(() => {
           setDisplayCategory(true);
                  setSelectedCategoryName(category)
        }, []);
  return (
    <div className="grid-container">
    <Header
        onSelectCategory={(category) => {
           setSelectedCategoryName(category.name);
           setDisplayCategory(true);
           setDisplayProduct(false);
          }}/>

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
                          }}
                          addToCart={(product) => {
                            console.log('added')
                            console.log(product)
                          }}
                    />
                    </div>
                    {selectedProductId && (
                        <div>
                            <Product id={selectedProductId} className={`${displayProduct ? "visible" : "hidden"}`}
                              addToCart={(product) => {
                                console.log('added')
                                console.log(product)
                              }}/>
                        </div>
                    )}
                </div>
            </div>
          </main>
    )}
    </div>
  );
};


export default App;
