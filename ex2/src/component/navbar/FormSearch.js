import React, {Component} from 'react';

class   FormSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue : event.target.value
        });
        // this.props.search(event.target.value);
    }

    render() {
        return (
            <div className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    onChange={(event) => this.isChange(event)}
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit" onClick={(dl)=>this.props.search(this.state.tempValue)}>
                    Search
                </button>
            </div>
        );
    }
}

export default FormSearch;