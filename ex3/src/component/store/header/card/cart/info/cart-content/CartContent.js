import React, {Component} from 'react';
import Product from "./Product";
import Total from "./Total";

class CartContent extends Component {
    render() {
        return (
            <div className="cart-content">
                <div className="icon-up"/>
                <ul>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </ul>
                <Total/>
            </div>
        );
    }
}

export default CartContent;