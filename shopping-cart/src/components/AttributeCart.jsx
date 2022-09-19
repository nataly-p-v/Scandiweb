import React, { useState } from 'react';
function AttributeCart({attributeMap, attr, attrName}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);
      const [selectedAttrId, setSelectedAttrId] = useState(null);

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