import React, { useState } from 'react';
import GetProducts from './components/getProducts';
import Product from './components/Product';
import Header from './components/Header';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
	const [displayCategory, setDisplayCategory] = useState();
	const [displayProduct, setDisplayProduct] = useState();

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
                    />
                    </div>
                    {selectedProductId && (
                        <div>
                            <Product id={selectedProductId} className={`${displayProduct ? "visible" : "hidden"}`}/>
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
