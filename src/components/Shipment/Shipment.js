import React, { useState } from 'react';

const Shipment = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [error,setError]=useState('')

    const hanndleNameBlur =event=>{
        setName(event.target.value)
    }
    const hanndleEmailBlur =event=>{
        setEmail(event.target.value)
    }
    const handleAddressBlur=event=>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur=event=>{
        setPhone(event.target.value)
    }
    const handleShipment=event=>{
        event.preventDefault()
        

    }


    return (
        <div className='form-container'>
        <div>
        <h1 className='form-title'>Shipping Information</h1>
        <form onSubmit={handleShipment} >
    <div className="input-group">
        <label htmlFor="name">Your Name</label>
        <input onBlur={hanndleNameBlur} type="text" name='name'  required/>
    </div>
    <div className="input-group">
        <label htmlFor="email">Email</label>
        <input onBlur={hanndleEmailBlur} type="email" name='email'  required/>
    </div>
    <div className="input-group">
        <label htmlFor="password">Password</label>
        <input onBlur={handleAddressBlur} type="text" name='address'  required/>
    </div>
    <div className="input-group">
        <label htmlFor="phone">Confirm Password</label>
        <input onBlur={handlePhoneBlur} type="text" name='phone'  required/>
    </div>
    <p style={{color:'red'}}>{error}</p>
    <input className='form-submit' type="submit" value='Shipment' />

</form>
</div>
</div>
    );
};

export default Shipment;