import React, { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { LOAD_CATEGORIES } from '../GraphQL/queries.js';

function GetCategories({onSelectCategory}) {
  const { data } = useQuery(LOAD_CATEGORIES);
  const [categories, setCategories] = useState([]);
 useEffect(() => {
    if (data) {
      setCategories(data.categories)
    }
  }, [data]);

  return (
    <div>
        <ul className="category-list">
                {categories.map(category => (
                    <li key={category.name} className="category-list__item" onClick={() => onSelectCategory(category)}>
                             <span className="category-list__link">{category.name}</span>
                            </li>
                ))}
        </ul>
    </div>
  );
}

export default GetCategories;