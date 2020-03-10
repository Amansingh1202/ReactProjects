import React from "react";
import ReactDOM from "react-dom";
import MainBody from "./components/MainBody.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SignIn from "./components/SignIn";
import JoinUs from "./components/JoinUS";
import Shopping from "./components/Shopping";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const LandingPage = () => {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
            <Route path="/" exact component={MainBody} />
            <Route path="/JoinUs" component={JoinUs} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Shopping" component={Shopping} />
            </Switch>
            <Footer />
        </div>
        </Router>
    )  ;
};
ReactDOM.render(<LandingPage />,document.getElementById('root'));
