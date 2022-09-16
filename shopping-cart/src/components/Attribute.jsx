import React, { useState} from 'react';

function Attribute({attr, onSelectAttribute}) {
  const [selectedId, setSelectedId] = useState(null);
    return (
        <div>
               {(attr.items.map((item,i) => {
               return <div key={i}
                       onClick={(e)=> {
                         onSelectAttribute(attr.name, item.displayValue, i);
                         setSelectedId(i);
                       }}
                      className={`attributes__item-value ${(selectedId === i) ? ' attributes__item-value--selected' : ''}`}>
                        <div className="attributes__item-value-center">{item.displayValue}</div>
                      </div>;
                 }))}
            </div>
    )
}

export default Attribute;