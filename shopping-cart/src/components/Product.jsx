import React, { useEffect, useState } from 'react';
import { useQuery} from "@apollo/client";
import { LOAD_PRODUCT } from '../GraphQL/queries.js';

function Product({id}) {
    console.log(id)
       const { data } = useQuery(LOAD_PRODUCT, {
              variables: {
                  id: id,
              },
          });
      const [product, setProduct] = useState([]);
     useEffect(() => {
        if (data) {
console.log(data)
        }
      }, [data]);
    return (
        <div>
            <p>Product: {id}</p>
        </div>
    )
}
export default Product;