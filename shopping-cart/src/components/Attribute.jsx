import React, { useState } from 'react';
function Attribute({attributeMap, attr, onSelectAttribute}) {
      const [selectedAttribute, setSelectedAttribute] = useState([]);
      const [selectedAttrName, setSelectedAttrName] = useState([]);

    return (
        <div>
               {(attr.items.map((item,i) => {
                return <div key={Math.random()} className="attributes__item-wrapper">
                       <input type="radio" id={item.displayValue} name={attr.name} value={item.displayValue}
                       onChange={()=> {setSelectedAttrName(attr.id);setSelectedAttribute(item.displayValue);
                       onSelectAttribute(attr.name, item.displayValue);}}/>
                       <div className={`attributes__item-value ${(selectedAttribute === item.displayValue) && (selectedAttrName === attr.name) ? ' attributes__item-value--selected' : ''}`}>
                         <div className="attributes__item-value-center">{item.displayValue}</div>
                       </div>

                       </div>;
                 }))}
            </div>
    )
}
export default Attribute;