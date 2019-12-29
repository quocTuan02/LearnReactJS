import React, {Component} from 'react';

class Total extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    <span>Tổng tiền:</span>
                    <span className="total">43.090.000 đ</span>
                    <a href="#checkout">Mua ngay</a>
                </p>
            </div>
        );
    }
}

export default Total;