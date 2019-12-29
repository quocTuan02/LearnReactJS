import React from 'react';
import './App.css';
import TopMenu from "./Component/TopMenu/TopMenu";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <div className="demo">
            <TopMenu/>
            <Header/>
            <Content tieuDe="la lad j jd dh fhb" noiDung="day laf noi dung 1" linkAnh={"img/01.jpg"}/>
            <Content tieuDe="la lad j jd dh fhb" noiDung="day laf noi dung  cdjb sjdfh" viTri1="order-lg-2"
                     linkAnh="img/02.jpg"/>
            <Content tieuDe="la lad j jd dh fhb" noiDung="day laf noi dung  cdjb sjdfh 3" linkAnh="img/03.jpg"/>
            <Footer/>
        </div>
    );
}

export default App;
