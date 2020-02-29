import React from "react";
import ReactDOM from "react-dom";
import MainBody from "./components/MainBody.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
const LandingPage = () => {
    return (
        <div>
            <Header />
            <MainBody />
            <Footer />
        </div>
    )  ;
};
ReactDOM.render(<LandingPage />,document.getElementById('root'));
