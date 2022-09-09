import React, { useState } from 'react';
import GetProducts from './components/getProducts';
import GetCategories from './components/getCategories';
import Product from './components/Product';
import Category from './components/Category';
import Header from './components/Header';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
  return (
    <div className="grid-container">
    <Header onSelectCategory={category => setSelectedCategoryName(category.name)}/>

     {selectedCategoryName && (
          <main>
            <div className="content">
                <div className="main">
                <div className={`${selectedProductId ? "hidden" : "visible"}`}>
                    <GetProducts categoryName={selectedCategoryName} onSelect={(product) => setSelectedProductId(product.id)}/>
                    </div>
                    {selectedProductId && (
                        <div>
                            <Product id={selectedProductId} />
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
