import React, { useState, useEffect } from 'react';
function AttributeCart({attributeMap, attr, attrName, attributeIds}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);
      const [selectedId, setSelectedId] = useState([]);

        useEffect(() => {

        attributeMap.forEach((i) => {
console.log(i);
setSelectedId(i);
        })

        }, []);

    return (
        <div>
               {(attr.items.map((item,i) => {
                 return <div key={Math.random()} id={i}
                        className={`attributes__item-value ${(selectedId === i) ? ' attributes__item-value--selected' : ''}`}>

                        <div className="attributes__item-value-center">{item.displayValue}</div>
                 </div> ;
              })) }

            </div>
    )
}
export default AttributeCart;