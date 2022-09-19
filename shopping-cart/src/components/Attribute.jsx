import React, {useState} from 'react';

function Attribute({attr, onSelectAttribute, productId, attributesNumber}) {
  const [selectedId, setSelectedId] = useState(null);

    return (
        <div>
               {(attr.items.map((item,i) => {
               return <div key={i}
                       onClick={(e)=> {
                         setSelectedId(i);
                         onSelectAttribute(attr.name, item.displayValue, productId, attributesNumber);
                       }}
                      className={`attributes__item-value ${(selectedId === i) ? ' attributes__item-value--selected' : ''}`}>
                        <div className="attributes__item-value-center">{item.displayValue}</div>
                      </div>;
                 }))}
            </div>
    )
}

export default Attribute;