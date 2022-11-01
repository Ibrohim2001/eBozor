import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='login'>
      <h2 className='login_title'>Login to your account</h2>
      <form onSubmit={handleSubmit} className='login_form'>
        <div className="form_group">
          <label htmlFor="username">Choose a username</label>
            <input 
              type="text" 
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login_input"
            />
            {/* <span className="error_msg">Wrong format</span> */}
        </div>
        <div className="form_group">
          <label htmlFor="email">Your email address</label>
            <input 
              type="text" 
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login_input"
            />
            {/* <span className={isValid ? "error_msg" : "error_msg display"}>Wrong format</span> */}
        </div>
        <div className="form_group">
          <label htmlFor="password">Create a password</label>
            <input 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login_input"
            />
            {/* <span className="error_msg ">Wrong format</span> */}
        </div>
        <div className="form_group">
          <button type='submit' className='login_btn'>Sing In</button>
        </div>
      </form>
    </div>
  )
}

export default Login