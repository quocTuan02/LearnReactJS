import React, {Component} from 'react';
import CartContent from "./cart-content/CartContent";

class CartInfo extends Component {
    render() {
        return (
            <div id="cart-info"
                 className="cart-info-box nk_tooltip"
            >
                <a href="kk">
                    <div className="icon">
                        <i className="nki-shopping-cart"/>
                        <span className="mount">2</span>
                    </div>
                </a>

                <CartContent/>
            </div>
        );
    }
}

export default CartInfo;