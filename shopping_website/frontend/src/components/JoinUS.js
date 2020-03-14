import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/sheet3.css';
import React from "react";
const JoinUs = () => {
    return (
        <div>
            <form className='JoinUsForm'>
                <h1 className='formHead'>Sign Up</h1>
                <p> Please fill in this form to create an account</p>
                <label for='email'>Email</label>
                <br />
                <input type='text' placeholder='Enter Email' name='email' required />
                <br />
                <label for='psw'>Password</label>
                <br />
                <input type='password' placeholder='Enter Password' name='psw' required/>
                <br />
                <label htmlFor='psw-repeat'>Repeat Password</label>
                <br />
                <input type='password' placeholder='Repeat Password' name='psw-repeat' required/>
                <br />
                <div className='clearfix'>
                    <button type='button' className='cancelbtn'>Cancel</button>
                    <button type='submit' className='signupbtn'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};
export default JoinUs;
