import React, {Component} from 'react';

class RowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            id: this.props.id,
            title: this.props.title,
            author: this.props.author,
            price: this.props.price,
            quantity: this.props.quantity
        }
    }

    doiTrangThaiEdit = () => {
        this.setState({
            "edit": !this.state.edit
        });
    };
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
                [name]: value
            }
        );
    };
    hoanThanh = () => {
        var info = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            quantity: this.state.quantity
        };
        this.props.editData(info);
        this.doiTrangThaiEdit();
    };
    rowData = () => {
        if (!this.state.edit) {
            return (
                <tr className={"row" + this.props.id}>
                    <th scope="row">
                        <span className="idx">{this.props.stt}</span>
                    </th>
                    <td>
                        <span>{this.props.title}</span>
                    </td>
                    <td>
                        <span>{this.props.author}</span>
                    </td>
                    <td>
                        <span>{this.props.price}</span>
                    </td>
                    <td>
                        <span>{this.props.quantity}</span>
                    </td>
                    <td>
                        <div className="btn-group">
                            <input
                                type="button"
                                onClick={this.doiTrangThaiEdit}
                                className="btn btn-sm btn-primary"
                                defaultValue="Sửa"
                            />
                            <input
                                type="button"
                                onClick={() => this.props.removeData(this.props.id)}
                                className="btn btn-sm btn-danger"
                                defaultValue="Xóa"
                            />
                        </div>

                    </td>
                </tr>
            )
        } else {
            return (
                <tr id={"trInput" + this.props.id}>
                    <th scope="row">
                        <span className="idx">{this.props.stt}</span>
                    </th>
                    <td>
                        <input
                            name={"title"}
                            className="form-control"
                            type="text"
                            placeholder="Tên sách"
                            defaultValue={this.props.title}
                            onChange={(event) => this.isChange(event)}
                        />
                    </td>
                    <td>
                        <input
                            name={"author"}
                            className="form-control"
                            type="text"
                            placeholder="Tác giả"
                            defaultValue={this.props.author}
                            onChange={(event) => this.isChange(event)}
                        />
                    </td>
                    <td>
                        <input
                            name={"price"}
                            className="form-control"
                            type="number"
                            placeholder="Giá"
                            defaultValue={this.props.price}
                            onChange={(event) => this.isChange(event)}
                        />
                    </td>
                    <td>
                        <input
                            name={"quantity"}
                            className="form-control"
                            type="number"
                            placeholder="Số lượng"
                            defaultValue={this.props.quantity}
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
                                   onClick={this.doiTrangThaiEdit}
                                   className="btn btn-sm btn-danger"
                                   defaultValue="Hủy"/>
                        </div>
                    </td>
                </tr>
            )
        }
    };

    render() {
        return (
            this.rowData()
        );
    }
}

export default RowData;