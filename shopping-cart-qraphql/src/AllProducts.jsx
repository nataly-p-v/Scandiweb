import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetAllProducts from './GetAllProducts.graphql';

export default ({ onSelect }) => {
	const { data, loading } = useQuery(GetAllProducts);

	return (
		<div>
			<h1>GetAllProducts</h1>

			{loading && <div>Loading...</div>}

			{!loading && data.getAllProducts && (
				<ul>
					{data.getAllProducts.map(product => (
						<li key={product.name}>
							{product.id}: {product.name} ({product.description} {product.inStock}){' '}
							<button onClick={() => onSelect(product)}>select</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};