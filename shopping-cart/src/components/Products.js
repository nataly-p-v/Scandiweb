import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/productActions";

class Products extends Component {
 constructor(props) {
    super(props);
    this.state = {
      currency: null,
    };
  }
  componentDidMount() {
    fetchCurrencies();
  }
    render(){
     const { currency } = this.state;
        return (
            <div>
                <ul className="products">

                 {/*this.props.products.map(product => (){
                    <li key={product.id}>
                    <div className="product">
                        <a href={"#"+product.id}><img src={product.image} alt="product"/></a>
                        <p>{product.description}</p>
                        <div className="product-price">{product.price}</div>
                        <div className="product-currency">{product.currency}</div>
                    </div>
                    <button>add to cart</button>
                    </li>
                 })*/}
                </ul>
            </div>
        )
    }
}
//export default connect(
//  (state) => ({ currency: state.currency }),
//  {
//    fetchCurrencies,
//  }
//)(Products);
export default connect()(Products);