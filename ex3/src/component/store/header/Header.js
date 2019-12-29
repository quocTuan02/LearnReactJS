import React, {Component} from 'react';
import Logo from "./logo/Logo";
import Card from "./card/Card";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid   header">
                    <div className=" container _nk_main">
                        <div className="row-fluid ">
                            <div className=" row flexthis content">
                                <div className="row-fluid ">
                                    <Logo/>
                                    <Card/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;