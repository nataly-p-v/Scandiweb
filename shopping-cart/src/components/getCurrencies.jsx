import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CURRENCIES } from '../GraphQL/queries.js'
import 'react-dropdown/style.css';

function GetCurrencies() {
  const { data } = useQuery(LOAD_CURRENCIES);
  const [currencies, setCurrencies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
 const [selectedOption, setSelectedOption] = useState(null);

 const toggling = () => setIsOpen(!isOpen);

   const onOptionClicked = value => () => {
     setSelectedOption(value);
     setIsOpen(false);
   };

 useEffect(() => {
    if (data) {
     setCurrencies(data.currencies)
    }
  }, [data]);

  return (
    <div className={`currency ${isOpen ? "is-open" : ""}`}>
         <div onClick={toggling} className="currency-header"
           > {selectedOption || "$"}
           <div className="arrow"></div>
                    </div>
           {isOpen && (
             <ul className="currency-dropdown">
               {currencies.map((option,i) => (
                 <li key={Math.random()} className="currency-dropdown__item" value={option.symbol} onClick={onOptionClicked(option.symbol)}>
                            {option.label}{option.symbol}
                         </li>
               ))}
             </ul>
           )}
    </div>

  );
}

export default GetCurrencies;
