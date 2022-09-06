import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product(props) {
    let { id } = useParams(); // Unpacking and retrieve id
    /*let index = props.product.findIndex(e => e.id === parseInt(id));*/
    let product = props.product;
    console.log(id)
    return (
        <div>
            <p>Product: {product.id}</p>
<div>
            <div className="product">
                <div data={product.id}>
                {!product.inStock && <div className="outStock">Out of stock</div>}

                  <div className="product">
                      <img src={product.gallery[0]} alt={product.id}></img>
                       <div
                        dangerouslySetInnerHTML={{__html: product.description}}
                      />
                       <div className="product-price">
                        {product.prices[0].amount}
                       </div>
                    <button
                    onClick={() => this.props.addToCart(product)}
                     className="product-button"
                   >
                   </button>
                  </div>
                </div>
            </div>
        </div>
        </div>
    )
}