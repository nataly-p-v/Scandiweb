import React, { useState, useEffect } from 'react';
function AttributeCart({attributeMap, attr, attrName, attributeIds}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);
      const [selectedAttrId, setSelectedAttrId] = useState(null);

                    useEffect(() => {
                        /*attributeMap.forEach((attr, value) => {
                             setSelectedItems(selectedItems.set(attr, value))
                           // setSelectedAttribute(attr); //nothing
                            //setSelectedAttrName(value);
                            console.log(attr, value) //0 1 0
                        })
                        console.log(selectedItems);*/

                    }, []);

    return (
        <div>
            {(attr.items.map((item,i) => {
                return <div key={i}
                    className={`attributes__item-value ${((attributeMap.get(attr.name) === item.displayValue))  ? ' attributes__item-value--selected' : ''}`}>

                    <div className="attributes__item-value-center">{item.displayValue}</div>
                </div> ;

            }))}

        </div>
    )
}
export default AttributeCart;