import React from 'react';

function Product({id}) {
    console.log(id)
    return (
        <div>
            <p>Product: {id}</p>
        </div>
    )
}
export default Product;