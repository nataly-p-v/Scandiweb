import React, {Component} from 'react';
import {useParams} from "react-router-dom";

class Product extends Component {
    render(){
          const {id} = useParams();
        return (
        <div>
            <div className="product">
             I am product
            </div>
        </div>
        )
    }
}
export default Product;