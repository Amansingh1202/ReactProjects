import React from 'react';
import HeaderImage from '../poster.jpg';
import '../css/stylesheet1.css'
class Header extends React.Component{
    render() {
        return(
            <div className="header">
                <div className='header-image'>
                    <img src={HeaderImage} />
                    <div className='image-text'>
                    <div className='txt1'>WANT TO LOOK YOUR BEST?</div>
                    <div className='txt2'>NEW</div>
                    <div className='txt3'>ARRIVALS</div>
                    <div className='txt4'>Sed ut perspicitias unde omnis iste natus error sit voluptatem accusantium<br />
                    laudantium,totam rem aperiam,eaque ipsa
                    </div>
                    <button className='txt5'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
