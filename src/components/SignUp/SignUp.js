import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
        <div>
        <h1 className='form-title'>Sign Up</h1>
        <form >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' />
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name='confirm-password' />
            </div>
            <input className='form-submit' type="submit" value='login' />

        </form>
        <p className='create-account'> Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
      
        
        </div>
    </div>
    );
};

export default SignUp;