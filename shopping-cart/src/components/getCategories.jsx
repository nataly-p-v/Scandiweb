import React, { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { LOAD_CATEGORIES } from '../GraphQL/queries.js';

function GetCategories({onSelectCategory, defaultCategory}) {
  const { data } = useQuery(LOAD_CATEGORIES);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

 useEffect(() => {
    if (data) {
      setCategories(data.categories);
      setSelectedCategoryName(defaultCategory);
    }
  }, [data]);

  return (
    <div>
        <ul className="category-list">
                {categories.map(category => (
                    <li key={category.name}
                    className={`category-list__item ${selectedCategoryName === category.name ? ' category-list__item--selected' : ''}`}
                    onClick={() => {onSelectCategory(category)
                    setSelectedCategoryName(category.name);
                    }}>
                     <span className="category-list__link">{category.name}</span>
                    </li>
                ))}
        </ul>
    </div>
  );
}

export default GetCategories;