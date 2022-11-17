import React from 'react'
import {NavLink} from 'react-router-dom'
export const Signin = () => {
  return (
    <div className='SignIn'>
        <div className='Heading' >
            <h2>Sign In</h2>
        </div>
        <div className='Input Fields'>
            <form className='SignUp_form'>
                <div className='SignUp_form_input'>
                    <strong>Email:</strong>
                    <input placeholder='Your Email' name='Email' autoComplete='off' type='email' id='email'/></div>
                <div className='SignUp_form_input'>
                    <strong>Password</strong>
                    <input placeholder='Password' name='Password' autoComplete='off' type='password' id='password'/></div>
                <div>
                    <input style={{width: '100px'}} type="submit" name="submit" id='signup' value='Sign-in'/>
                </div>
            </form>
                <div>
                    
                        <NavLink className="nav-link" to="/signup"><strong style={{margin: '10px', height: '30px'}} >Register</strong></NavLink>
                        
                   
                </div>
        </div>


    </div>
  )
}
