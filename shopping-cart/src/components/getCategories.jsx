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
            <ul>
                {categories.map(category => (
                    <li key={category.name} className="products-list__item">
                             {category.name}
                            <button
                            onClick={() => onSelectCategory(category)}>select</button></li>
                ))}
            </ul>
        </ul>
    </div>
  );
}

export default GetCategories;