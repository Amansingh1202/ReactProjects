import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../css/sheet1.css';
import { Link } from 'react-router-dom';
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
                        <h2>Shopping Website</h2>
                    </div>
                    <div className='collapse navbar-collapse' id='MyNavbar'>
                        <ul className='nav navbar-nav'>
                            <Link to="/">
                                <li className='active nv'>Home</li>
                            </Link>
                            <Link to="/JoinUs">
                                <li className='nv'><span className='glyphicon glyphicon-user'></span>Join US</li>
                            </Link>
                            <Link to="/SignIn">
                                <li className='nv'><span className='glyphicon glyphicon-log-in'></span>Sign In</li>
                            </Link>
                            <Link to="/Shopping">
                                <li className='nv'>Shopping Basket</li>
                            </Link>
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
                <h1 className='ImageT'>Shop with us</h1>
                <h3>Choose from our wide range of products</h3>
                    <button type='button' className='btn'><a href='#'>Let's Go</a></button>
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
