import React, { useState } from 'react';
import GetProducts from './components/getProducts';
import GetCategories from './components/getCategories';
import Product from './components/Product';
import Category from './components/Category';

function App () {
	const [selectedProductId, setSelectedProductId] = useState();
	const [selectedCategoryName, setSelectedCategoryName] = useState();
  return (
    <div className="grid-container">
    <header > <GetCategories onSelectCategory={category => setSelectedCategoryName(category.name)}/> </header>
     {selectedCategoryName && (
        <div>
            <Category name={selectedCategoryName} />
        </div>
    )}
      <main>
        <div className="content">
            <div className="main">
                <GetProducts onSelect={product => setSelectedProductId(product.id)}/>
                {selectedProductId && (
                    <div>
                        <Product id={selectedProductId} />
                    </div>
                )}
            </div>
        </div>
      </main>
    </div>
  );
};


export default App;
