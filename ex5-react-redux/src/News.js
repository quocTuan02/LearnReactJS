import React, {Component} from 'react';
import {connect} from "react-redux";

class News extends Component {
    // useEditStatusInStore = () => {
    //     let {dispatch} = this.props;
    //     dispatch({
    //         type: 'CHANGE_STATUS'
    //     })
    // };

    render() {
        return (
            <div>
                <h2>Day la News.js</h2>
                <button onClick={() => this.props.useEditStatusInStore()}>click</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownPrpps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({
                type: 'CHANGE_STATUS'
            })
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(News);