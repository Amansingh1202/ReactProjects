import React from "react";
import '../css/fontawesome.min.css';
import '../css/sheet2.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 base'>
                        <span className="glyphicon glyphicon-map-marker"></span>49 Vermont Ave.Manitowoc, WI 54220
                        <br /><span className="glyphicon glyphicon-earphone"></span>02225339023
                        <br /><span className="glyphicon glyphicon-envelope"></span><a href="mailto:aks001235@gmail.com" target="_top">aks001235@gmail.com</a>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 base'>
                    <h4>About Us::
                    <br /> This is a page developed using React,Bootstrap and MySQL
                    </h4>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href='#' className="fa fa-instagram"></a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
