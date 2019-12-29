import React, {Component} from 'react';
import TableData from "./tableData/TableData";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "themMoi": false
        }
    }

    doiTrangThai = () => {
        this.setState({
            "themMoi": !this.state.themMoi
        });
    };

    btnAddNew = () => {
        if (!this.state.themMoi) {
            return (
                <div className="container">
                    <div className="btn btn-success btn-block " onClick={this.doiTrangThai}>Thêm mới</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="container">
                <TableData editData={this.props.editData} removeData={this.props.removeData} dataNew={this.props.dataNew} data={this.props.data} themMoi={this.state.themMoi} doiTrangThai={() => this.doiTrangThai()}/>
                {this.btnAddNew()}
            </div>
        );
    }
}

export default Content;