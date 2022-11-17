import React from 'react'
import {NavLink} from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='SignUp'>
        <div className='Heading' >
            <h2>Sign up</h2>
        </div>
        <div className='Input Fields'>
            <form className='SignUp_form'>
                <div className='SignUp_form_input'>
                    <strong>Name:</strong>
                    <input placeholder='Name' name='Name' autoComplete='off' type='text' id='name'/></div>
                <div className='SignUp_form_input'>
                    <strong>Email:</strong>
                    <input placeholder='Your Email' name='Email' autoComplete='off' type='email' id='email'/></div>
                <div className='SignUp_form_input'>
                    <strong>Phone</strong>
                    <input placeholder='Your Phone' name='Phone' autoComplete='off' type='number' id='phone'/></div>
                <div className='SignUp_form_input'>
                    <strong>Profession</strong>
                    <input placeholder='Your Profession' name='work' autoComplete='off' type='text' id='work'/></div>
                <div className='SignUp_form_input'>
                    <strong>Password</strong>
                    <input placeholder='Password' name='Password' autoComplete='off' type='password' id='password'/></div>
                <div className='SignUp_form_input'>
                    <strong>Confirm Password</strong>
                    <input placeholder='Confirm Password' name='CPassword' autoComplete='off' type='password' id='cpassword'/></div>
                <div>
                    <input type="submit" name="submit" id='signup' value='register'/>
                </div>
            </form>
                <div>
                    <>Already have an account?</><NavLink className="nav-link" to="/signin"><strong style={{margin: '10px', height: '30px'}} >SignIn</strong></NavLink>

                </div>
        </div>
  

    </div>
  )
}
