import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    return (
            <div className='form-container'>
            <div>
            <h1 className='form-title'>Login</h1>
            <form >
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'  required/>
                </div>
                <input className='form-submit' type="submit" value='login' />

            </form>
            <p className='create-account'> New to Ema-John ? <Link className='form-link' to='/signUp'>Create an Account</Link></p>
            <div className='line-box'>
                <div className='line'>

                </div>
                <p>Or</p>
                <div className='line'>

                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Login;