import React, {Component} from 'react';
import RowData from "./RowData";
import AddData from "./AddData";

class TableData extends Component {

    maptingDataBooks = () => (
        this.props.data.map(
            (value, key) => (
                <RowData
                    editData={this.props.editData}
                    removeData={this.props.removeData}
                    key={key}
                    stt={key + 1}
                    id={value.id}
                    title={value.title}
                    author={value.author}
                    price={value.price}
                    quantity={value.quantity}
                />
            )
        )

    );

    formInput = () => {
        if (this.props.themMoi) {
            return <AddData dataNew={this.props.dataNew} doiTrangThai={this.props.doiTrangThai}/>
        }
    };

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sách</th>
                    <th scope="col">Tác giả</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {this.maptingDataBooks()}

                {this.formInput()}

                </tbody>

            </table>

        );
    }
}

export default TableData;