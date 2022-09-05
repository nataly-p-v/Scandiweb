import React, {Component} from 'react';
//import { connect } from "react-redux";
import { Link} from "react-router-dom";

class Products extends Component {
    render(){
        return (
            <div>
                     {!this.props.products ? (
                         <div>Loading...</div>
                       ) : (
                         <ul className="products">
                           {this.props.products.map((product) => (
                             <li key={product.id}>
                             {!product.inStock && <div className="outStock">Out of stock</div>}

                               <div className="product">

                                 <Link
                                   to={'product/' + product.id}
                                 >
                                   <img src={product.gallery[0]} alt={product.id}></img>
                                    <div
                                     dangerouslySetInnerHTML={{__html: product.description}}
                                   />
                                    <div className="product-price">
                                     {product.prices[0].amount}

                                    </div>
                                 </Link>

                                 <button
                                 onClick={() => this.props.addToCart(product)}
                                  className="product-button"
                                >
                                </button>
                               </div>
                             </li>
                           ))}
                         </ul>
                       )}
            </div>
        )
    }
}
export default Products;