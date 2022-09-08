import React, { useState } from 'react';
import AllProducts from './AllProducts';
import Product from './Product';

export default () => {
	const [selectedProductId, setSelectedProductId] = useState();

	return (
		<div>
			<div>
				<AllProducts onSelect={product => setSelectedProductId(product.id)} />
			</div>

			{selectedProductId && (
				<div>
					<Product id={selectedProductId} />
				</div>
			)}
		</div>
	);
};
