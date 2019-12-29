import React, {Component} from 'react';
const uuidv1 = require('uuid/v1');
class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv1(),
            title: "",
            author: "",
            price: 0,
            quantity: 0,
        }
    }


    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
                [name]: value
            }
        );
    };

    hoanThanh = () => {
        this.props.dataNew(this.state);
        this.props.doiTrangThai();
    };

    render() {

        return (
            <tr id="trNew">
                <th scope="row"/>
                <td>
                    <input
                        name={"title"}
                        className="form-control"
                        type="text"
                        placeholder="Tên sách"
                        onChange={(event) => this.isChange(event)}
                    />
                </td>
                <td>
                    <input
                        name={"author"}
                        className="form-control"
                        type="text"
                        placeholder="Tác giả"
                        onChange={(event) => this.isChange(event)}
                    />
                </td>
                <td>
                    <input
                        name={"price"}
                        className="form-control"
                        type="number"
                        placeholder="Giá"
                        onChange={(event) => this.isChange(event)}
                    />
                </td>
                <td>
                    <input
                        name={"quantity"}
                        className="form-control"
                        type="number"
                        placeholder="Số lượng"
                        onChange={(event) => this.isChange(event)}
                    />
                </td>
                <td>
                    <div className="btn-group">
                        <input
                            type="button"
                            onClick={this.hoanThanh}
                            className="btn btn-sm btn-success"
                            defaultValue="Hoàm thành"
                        />
                        <input type="button"
                               onClick={this.props.doiTrangThai}
                               className="btn btn-sm btn-danger"
                               defaultValue="Hủy"/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default AddData;