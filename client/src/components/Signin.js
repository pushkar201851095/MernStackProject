import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
export const Signin = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] =  React.useState('');



  const handleSubmit = async (e)=>{
    e.preventDefault();

    const res = await fetch('/signin',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body :JSON.stringify({
            email, password 
        })
   })
   const data = await res.json();
       if(data.status===422|| !data){
        window.alert(data.message);
       }
       else if(data.status===400 ){
            window.alert(data.message);
            console.log("invalid Registration");
        }
        else{
            console.log(data)
            window.alert(data.message);
            console.log(data.message);
            navigate('/');
        }
        

        

  }
  React.useEffect(()=>{
    
    

}, [])
  return (
    <div className="SignIn">
      <div className="Heading">
        <h2>Sign In</h2>
      </div>
      <div className="Input Fields">
        <form method="POST" className="SignUp_form">
          <div className="SignUp_form_input">
            <strong>Email:</strong>
            <input
              placeholder="Your Email"
              name="Email"
              autoComplete="off"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              id="email"
            />
          </div>
          <div className="SignUp_form_input">
            <strong>Password</strong>
            <input
              placeholder="Password"
              name="Password"
              autoComplete="off"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              id="password"
            />
          </div>
          <div>
            <input
              style={{ width: "100px" }}
              type="submit"
              name="submit"
              id="signup"
              value="Sign-in"
              onClick={handleSubmit}
            />
          </div>
        </form>
        <div>
          <NavLink className="nav-link" to="/signup">
            <strong style={{ margin: "10px", height: "30px" }}>Register</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
