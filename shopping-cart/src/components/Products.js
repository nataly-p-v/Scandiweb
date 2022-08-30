import React, {Component} from 'react'

export default class Products extends Component {
    render(){
        return (
            <div>
                <ul class="products">
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