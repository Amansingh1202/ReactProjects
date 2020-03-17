import React from "react";
import '../css/sheet4.css'
const SignIn = () => {
    return (
        <div>
            <div className='SignIn'>
            <h1>Sign In</h1>
            <form>
            <input type='text' placeholder='Enter your Email' />
            <br />
            <input type='password' placeholder='Enter Password' />
            <br />
                <button type='submit'>Sign In</button>
            </form>
            </div>
        </div>
    );
};
export default SignIn;
