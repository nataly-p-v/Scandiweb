import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetProduct from './GetProduct.graphql';

export default ({ id }) => {
return (
        <div>
            <p>Product: {id}</p>
        </div>
    )
};