import React, {Component} from 'react';
import HotlineContent from "./HotlineContent";

class Hotline extends Component {
    render() {
        return (
            <div id="hotline-content" className="nk_tooltip">
                <a href="tel:19006612">
                    <div className="icon">
                        <i className="nki-phone"/>
                    </div>
                    <p>
                        <span>1900.1267</span>
                        <span>Hotline mua hàng</span>
                    </p>
                </a>
                <HotlineContent/>
            </div>
        );
    }
}

export default Hotline;