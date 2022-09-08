import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetProduct from './GetProduct.graphql';

export default ({ id }) => {
	const { data, loading } = useQuery(GetProduct, {
		variables: {
			id: id
		}
	});

	const product = data ? data.getProduct : null;

	return product ? (
		<div>
			<h1>{product.id}</h1>
		</div>
	) : (
		<div>Loading...</div>
	);
};