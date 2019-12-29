import React, {Component} from 'react';

class HotlineContent extends Component {
    render() {
        return (
            <div className="hotline-content">
                <div className="icon-up" />
                <p>
                    <span>Tổng đài mua hàng</span>
                    <a href="tel:1900.1267">
                        <span className="color1">1900.1267</span>
                    </a>
                </p>
                <p>
                    <span>Thời gian hoạt động</span>
                    <span className="color3">8h00 - 22h00</span>
                </p>
            </div>
        );
    }
}

export default HotlineContent;