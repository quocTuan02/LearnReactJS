import React, {Component} from 'react';

var abc = () => {
    alert("thoong baos cais loonf");
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }

    }

    xyz = () => {
        alert("cos cais loonf ys")
    };
    z123 = (x) => {
        alert("thooi ssi " + x);
    };

    renderButton = () => (
        <div className="row">
            <div className="btn-group" role="group" aria-label="">
                <button className="btn btn-success"
                        onClick={() => {
                            this.setState({trangThai: 1});
                        }}
                        type="button">
                    Edit
                </button>
                <button type="button" className="btn btn-warning">Remove</button>
            </div>
        </div>
    );

    renderForm = () => (
        <div className="row">
            <div className="form-group">
         exitexit}





                <input defaultValue={this.props.tieuDe} type="text" className="form-control" name="title" placeholder="Title"/>
            </div>
            <div className="form-group">
                <button className="btn btn-danger"
                        onClick={() => {
                            this.setState({trangThai: 0});
                        }}
                        type="button">
                    save
                </button>
            </div>
        </div>
    );

    displayCheck = () => {
        if (this.state.trangThai === 1) {
            return this.renderForm();
        } else return this.renderButton();
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.viTri1}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.linkAnh}/>
                            </div>
                        </div>
                        <div className={"col-lg-6 "}>
                            <div className="p-5">
                                <h2 className="display-4">{this.props.tieuDe}</h2>
                                <p>
                                    {this.props.noiDung}
                                </p>
                                {/*  <div className="row">
                                    <div className="btn-group" role="group" aria-label="">
                                        <button type="button" onClick={abc} className="btn btn-success">abc</button>
                                        <button type="button" onClick={() => this.z123(1254474)}
                                                className="btn btn-light">123
                                        </button>
                                        <button type="button" onClick={this.xyz} className="btn btn-warning">xyz
                                        </button>
                                        <button type="button" onClick={this.z123.bind(this, "max cha nhaf mayf")}
                                                className="btn btn-success">abc
                                        </button>

                                    </div>
                                </div>*/}
                                {this.displayCheck()}

                            </div>
                        </div>

                    </div>
                    <hr/>
                </div>
            </section>
        );
    }
}

export default Content;