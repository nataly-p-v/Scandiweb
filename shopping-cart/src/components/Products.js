import React, {Component} from 'react';
import { connect } from "react-redux";

class Products extends Component {
 constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log( console.log(this.props.products))
  }
    render(){
        return (
            <div>
                     {!this.props.products ? (
                         <div>Loading...</div>
                       ) : (
                         <ul className="products">
                           {this.props.products.map((product) => (
                             <li key={product.id}>
                               <div className="product">
                                 <a
                                   href={"#" + product.id}
                                   onClick={() => {console.log('"#" + product.id')}}
                                 >

                                   <img src={product.gallery[0]} alt={product.id}></img>
                                    <div
                                     dangerouslySetInnerHTML={{__html: product.description}}
                                   />
                                    <div className="product-price">
                                     {product.prices[0].amount}

                                    </div>
                                 </a>
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