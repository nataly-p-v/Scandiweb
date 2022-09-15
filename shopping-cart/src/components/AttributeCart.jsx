import React, { useState, useEffect } from 'react';
function AttributeCart({attributeMap, attr, attrName}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);

        useEffect(() => {

        attributeMap.forEach ((item,name) => {
            setSelectedAttribute(item);
            setSelectedAttrName(name);
            console.log(selectedAttribute,selectedAttrName);
        })

        }, []);

    return (
        <div>
               {(attr.items.map((item,i) => {
console.log(selectedAttribute === item.displayValue);
                 return <div key={Math.random()}
                        className={`attributes__item-value ${(selectedAttribute === item.displayValue) && (selectedAttrName === attrName) ? ' attributes__item-value--selected' : ''}`}>

                        <div className="attributes__item-value-center">{item.displayValue}</div>
                 </div> ;
              })) }

            </div>
    )
}
export default AttributeCart;