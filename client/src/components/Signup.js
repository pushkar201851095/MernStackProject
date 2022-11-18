import React, { useEffect } from 'react'
import {NavLink, useNavigate } from 'react-router-dom'

export const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] =  React.useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: "" 
    });
    let name, value;
    const handleInput = (e)=>{
        name = e.target.name;
        value =  e.target.value;

        setUser({...user, [name]:value});
    }
    useEffect(()=>{
        // console.log(user);
        

    }, [])

    const handleSubmit = async (e)=>{
        console.log(user);
        e.preventDefault();
       
       const {name , email, phone, work, password, cpassword} =  user;

       const res = await fetch('/register',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body :JSON.stringify({
                name , email, phone, work, password, cpassword 
            })
       })
       const data = await res.json();
       if(data.status===422 || !data){
            window.alert("Invalid Registration!!!");
            console.log("invalid Registration");
        }
        else{
            console.log(data)
            window.alert(data.message);
            console.log(data.message);

        }
        navigate('/signin');
    }
  return (
    <div className='SignUp'>
        <div className='Heading' >
            <h2>Sign up</h2>
        </div>
        <div className='Input Fields'>
            <form method='POST' className='SignUp_form'>
                <div className='SignUp_form_input'>
                    <strong>Name:</strong>
                    <input placeholder='Name' name='name' autoComplete='off' 
                    value={user.name}
                    onChange={handleInput}
                    type='text' id='name'/></div> 
                <div className='SignUp_form_input'>
                    <strong>Email:</strong>
                    <input placeholder='Your Email' name='email' autoComplete='off' 
                    value={user.email}
                    onChange={handleInput}
                    type='email' id='email'/></div>
                <div className='SignUp_form_input'>
                    <strong>Phone</strong>
                    <input placeholder='Your Phone' name='phone' autoComplete='off' 
                    value={user.phone}
                    onChange={handleInput}
                    type='number' id='phone'/></div>
                <div className='SignUp_form_input'>
                    <strong>Profession</strong>
                    <input placeholder='Your Profession' name='work' autoComplete='off' 
                    value={user.work}
                    onChange={handleInput}
                    type='text' id='work'/></div>
                <div className='SignUp_form_input'>
                    <strong>Password</strong>
                    <input placeholder='Password' name='password' autoComplete='off' 
                    value={user.password}
                    onChange={handleInput}
                    type='password' id='password'/></div>
                <div className='SignUp_form_input'>
                    <strong>Confirm Password</strong>
                    <input placeholder='Confirm Password' name='cpassword' autoComplete='off' 
                    value={user.cpassword}
                    onChange={handleInput}
                    type='password' id='cpassword'/></div>
                <div>
                    <input type="submit" name="submit" id='signup' value='register' onClick={handleSubmit}/>
                </div>
            </form>
                <div>
                    <>Already have an account?</><NavLink className="nav-link" to="/signin"><strong style={{margin: '10px', height: '30px'}} >SignIn</strong></NavLink>

                </div>
        </div>
  

    </div>
  )
}
