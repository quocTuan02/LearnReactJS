import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <li>
                <div className="product-img">
                    <a href="#tu-lanh-lg-gr-b247js.html">
                        <img src="http://placehold.it/50x50" alt={"ajja aj"}/>
                    </a>
                </div>
                <div className="product-desc">
                    <p className="title">
                        Tủ lạnh LG Inverter 626 Lít Side by side GR-B247JS
                    </p>
                    <p className="price">19.900.000đ</p>
                    <a href="javascript">
                        <i className="nki-Vector"/>
                    </a>
                </div>
            </li>

        );
    }
}

export default Product;