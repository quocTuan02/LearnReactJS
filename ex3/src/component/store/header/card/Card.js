import React, {Component} from 'react';
import Search from "./search/Search";
import Cart from "./cart/Cart";

class Card extends Component {
    render() {
        return (
            <div className="span12 nav-right">
                <div className="row-fluid ">
                    <div className="header-right" id="holine-new">
                        <Search/>
                        <Cart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;