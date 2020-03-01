import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../css/sheet1.css';
const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#MyNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='#' >Hello</a>
                    </div>
                    <div className='collapse navbar-collapse' id='MyNavbar'>
                        <ul className='nav navbar-nav'>
                            <li className='active'><a href='index.html'>Home</a></li>
                            <li><a href='#'><span className='glyphicon glyphicon-user'></span>Join US</a></li>
                            <li><a href='#'><span className='glyphicon glyphicon-log-in'></span>Sign In</a></li>
                            <li><a href='#'>Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
const BrandIntro = () =>{
    return(
        <div>
            <section className='headerImage'>
                <div id='ImageText'>
                <h1>Shop with us</h1>
                <h3>Choose from our wide range of products</h3>
                    <button type='button'><a href='#'>Let's Go</a></button>
                </div>
            </section>
        </div>
    );
};
const Header = () => {
    return (
        <div>
            <NavBar />
            <BrandIntro />
        </div>
    );
};
export default Header;
