import React, { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { LOAD_CATEGORIES } from '../GraphQL/queries.js';
import { Link} from "react-router-dom";

function GetCategories() {
  const { data } = useQuery(LOAD_CATEGORIES);
  const [categories, setCategories] = useState([]);
 useEffect(() => {
    if (data) {
      setCategories(data.categories)
    }
  }, [data]);
    const result = categories.map((obj, i) => {
          return <li key={i} className="category-list__item">
           <Link to={'category/' + obj.name} className="category-list__link">{obj.name}</Link>
          </li>;
       });

  return (
    <div>
        <ul className="category-list">
           {result}
        </ul>
    </div>
  );
}

export default GetCategories;