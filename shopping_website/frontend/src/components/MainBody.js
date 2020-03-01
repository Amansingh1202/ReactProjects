import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import camera from '../images/camera.jpeg'
import mobile from '../images/mobile.jpeg'
import laptop from '../images/laptop.jpeg'
import speaker from '../images/speakers.jpeg'
import headphones from '../images/headphones.jpeg'
import powerbank from '../images/powerbank.jpeg'
import '../css/sheet2.css'
const MainBody = () => {
    return (
        <div className='container mainBody'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={camera} alt='Camera'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Camera</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={mobile} alt='Mobile'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Mobile</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={laptop} alt='laptop'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Laptop</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={headphones} alt='Headphone'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Camera</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={powerbank} alt='Power Bank'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Power Bank</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-9 image'>
                    <div className='thumbnail'>
                        <img src={speaker} alt='Speaker'></img>
                        <div className='caption'>
                            <div className='description'>
                                <h2>Speaker</h2><br/>
                                <button id='bStyle'>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};
export default MainBody;
