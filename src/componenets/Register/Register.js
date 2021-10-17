import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register : Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""placeholder='Your Email' /><br />
                    <input type="password" name="" id="" placeholder='Your Password' /><br />
                    <input type="password" name="" id="" placeholder=' >Re-enter Your Password' /><br />
                    <input type="submit" value="Create Account" />
                    <p>Already have an account? 
                        <Link to="/login">
                            Log In
                        </Link>
                    </p>
                    <div>----or-----</div>
                    <button className='btn btn-primary'>Google Sign In</button>

                </form>
            </div>
        </div>
    );
};

export default Register;