import React, { useState, useEffect } from 'react';
function AttributeCart({attributeMap, attr, attrName, attributeIds, selectedId}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);

                    useEffect(() => {
            console.log(selectedId);


                    }, []);

    return (
        <div>
               {(attr.items.map((item,i) => {
                 return <div key={Math.random()} id={i}
                        className={`attributes__item-value ${(selectedId) ? ' attributes__item-value--selected' : ''}`}>

                        <div className="attributes__item-value-center">{item.displayValue}</div>
                 </div> ;
              })) }

            </div>
    )
}
export default AttributeCart;