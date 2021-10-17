import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const location = useLocation()
    console.log('came from',location.state?.from );
    const history = useHistory();
    const redirect_uri=location.state?.from||'/home'
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
history.push(redirect_uri)
        })

    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Your Email'/><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="Submit" />
                    <p>new to ema-john <Link to="/register">Create  account</Link></p>
                    <div>----or.....</div>
                   
                 </form>
                 <button onClick={handleGoogleLogin} className='btn btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;