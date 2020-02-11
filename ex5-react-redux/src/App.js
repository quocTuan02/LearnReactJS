import React, {Component} from 'react';
import News from "./News";
import {connect} from "react-redux";


class App extends Component {
    render() {
        return (
            <div>
                <center>
                    {this.props.dulieu}
                    <News/>
                </center>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dulieu: state.num
    }
};


export default  connect(mapStateToProps)(App);