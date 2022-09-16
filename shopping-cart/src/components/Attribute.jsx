import React, { useState, useEffect } from 'react';
function Attribute({attr, onSelectAttribute}) {
      const [selectedId, setSelectedId] = useState([]);
        useEffect(() => {
                                        console.log(selectedId)

        }, []);
    return (
        <div>
               {(attr.items.map((item,i) => {
                return <div key={Math.random()} className="attributes__item-wrapper"
                                onClick={(e)=> {
                                        setSelectedId(i);

                                        console.log(selectedId === i)
                                       }}>
                       <input type="radio" id={i} name={attr.name} value={item.displayValue}
                       onChange={()=> {
                           onSelectAttribute(attr.name, item.displayValue, i);
                       }}/>
                       <div className={`attributes__item-value ${(selectedId === i) ? ' attributes__item-value--selected' : ''}`}>
                         <div className="attributes__item-value-center">{item.displayValue}</div>
                       </div>

                       </div>;
                 }))}
            </div>
    )
}
export default Attribute;