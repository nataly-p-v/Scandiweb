import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import _ from 'lodash';

function Cart({cartItems, selectedOption, attributeMap, attributeMapArr}) {
      const [selectedAttrId, setSelectedAttrId] = useState(null);
      let [itemQuantity, setItemQuantity] = useState(1);
      const [duplicatesIndices , setDuplicatesIndices ] = useState([]);
      const [result , setResult ] = useState([]);
              useEffect(() => {
              attributeMap.forEach((i) => {
                  setSelectedAttrId(i);
              })
              attributeMapArr.forEach((current, index) => {
                if (duplicatesIndices.includes(index)) return;
                result.push(current);
                 for (let comparisonIndex = index + 1; comparisonIndex < attributeMapArr.length; comparisonIndex++) {
                    const comparison = attributeMapArr[comparisonIndex];
                    const currentKeys = Object.keys(current);
                    const comparisonKeys = Object.keys(comparison);
                    // Проверяем длину массивов
                    if (currentKeys.length !== comparisonKeys.length) continue;

                    // Проверяем значение ключей
                    const currentKeysString = currentKeys.sort().join("").toLowerCase();
                    const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();

                    if (currentKeysString !== comparisonKeysString) continue;
                    // Проверяем индексы ключей
                    let valuesEqual = true;
                    for (let i = 0; i < currentKeys.length; i++) {
                        const key = currentKeys[i];
                        if ( JSON.stringify(current[key]) !== JSON.stringify(comparison[key]) ) {
                            valuesEqual = false;
                            break;
                        }
                    }
                    if (valuesEqual) duplicatesIndices.push(comparisonIndex);

                 } // Конец цикла
               })
              console.log(result) // если я куплю 4 одиинаковых товара тут будет лежать 1 и еще надо записывать количество итераций
              console.log(attributeMapArr)


              }, []);
        return (
        <div>
         <h1 className="cart-name">Cart</h1>
            <ul className="main-cart">
                <div className="main-cart__items">
                     {cartItems.length>0 ? cartItems.map((item, i) => (
                        <CartItem key={i} item={item} cartItems={cartItems} selectedOption={selectedOption} attributeMap={attributeMap}/>
                     ))
                     : <h1 className="cart-name">0 items added to cart!</h1>
                     }
                </div>
                <div>Tax 21%</div>
                <div>total: </div>
                <div>quantity: {cartItems.length}</div>
                 <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Order')
                      }}
                  className="product-card__button">Order
                </button>
            </ul>
        </div>
        )
}
export default Cart;