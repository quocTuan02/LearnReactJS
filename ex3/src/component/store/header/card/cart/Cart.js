import React, {Component} from 'react';
import Hotline from "../hotline/Hotline";
import CartInfo from "./info/CartInfo";

class Cart extends Component {
    render() {
        return (
            <div id="card">
                <CartInfo/>
                <Hotline/>
                <div className="clearfix"/>
            </div>

        );
    }
}

export default Cart;