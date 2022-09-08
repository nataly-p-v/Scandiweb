import React from 'react';
import * as GetAllProducts from './GetAllProducts.graphql';
import { useQuery } from "@apollo/client";

function AllProducts ({ onSelect }) {
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
export default AllProducts;