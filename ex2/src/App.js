import React, {Component} from 'react';
import Navbar from "./component/navbar/Navbar";
import Content from "./component/content/Content";
import Footer from "./component/Footer";
import DataBooks from "./data/book"

class App extends Component {
    //
    // componentWillMount() {
    //     console.log("dday laf componentWillMount")
    // }
    //
    // componentDidMount() {
    //     console.log("ddaay laf componentDidMount")
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    constructor(props) {
        super(props);
        this.state = {
            data: DataBooks,
            searchText: ""
        }
    }

    getTextSearch = (dl) => {
        this.setState({
            searchText: dl
        });
    };
    getDataNew = (item) => {
        var items = this.state.data;
        items.push(item);
        this.setState({
            data: items
        });
    };

    removeData = (id) => {
        var tempData = this.state.data;
        tempData = tempData.filter(item => item.id !== id);
        this.setState({
            data: tempData
        });
    };
    editData = (info) => {
        var tempData = this.state.data;

        tempData.forEach((temp) => {
            if (info.id === temp.id) {
                temp.title = info.title;
                temp.author = info.author;
                temp.quantity = info.quantity;
                temp.price = info.price;
            }
        });
        this.setState({
            data: tempData
        });
    };

    render() {
        var ketQua = [];
        this.state.data.forEach((item) => {
            if (item.title.indexOf(this.state.searchText) !== -1) {
                ketQua.push(item)
            }
        });
        return (

            <div>
                <Navbar searchProps={(dl) => this.getTextSearch(dl)}/>
                <Content editData={this.editData} removeData={this.removeData} dataNew={this.getDataNew}
                         data={ketQua}/>
                <Footer/>
            </div>


        );
    }
}

export default App;