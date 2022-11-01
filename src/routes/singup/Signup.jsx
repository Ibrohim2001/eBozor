import React, { useState } from 'react';
import './signup.css';
import { useGetData } from '../../hooks/useGetData';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  // const { data, loading } = useGetData('https://fakestoreapi.com/users', {
  //   method: "POST",
  //   body: JSON.stringify(
  //     {
  //       email: email,
  //       username: username,
  //       password: password, 
  //       name: {
  //         firstname: firstName,
  //         lastname: lastName
  //       }
  //     }
  //   )
  // })
  const [data, setData] = useState([])
  const fetchData = () => {
    axios.get('https://fakestoreapi.com/users', {
    method: "POST",
    body: JSON.stringify(
        {
          email: email,
          username: username,
          password: password, 
          name: {
            firstname: firstName,
            lastname: lastName
          }
        }
      )
    }).then(res => setData(res.data)).catch(err => console.log(err))
  }
  console.log(data)

  const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.match(regEx)) {
      setIsValid(true);
      setEmail("");
    } else {
      setIsValid(false);
    }

    fetchData()
  }

  return (
    <div className='signup'>
      <h2 className='signup_title'>Create an account</h2>
      <form onSubmit={handleSubmit} className='signup_form'>
        <div className="form_group">
          <label htmlFor="firstName">First name</label>
            <input 
              type="text" 
              placeholder='Your first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="signup_input"
            />
            {/* <span className="error_msg">{isValid ? "Fill this input" : ""}</span> */}
        </div>
        <div className="form_group">
          <label htmlFor="lastName">Last name</label>
            <input 
              type="text" 
              placeholder='Your last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="signup_input"
            />
            {/* <span className="error_msg">{isValid ? "Fill this input" : ""}</span> */}
        </div>
        <div className="form_group">
          <label htmlFor="username">Choose a username</label>
            <input 
              type="text" 
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup_input"
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
              className="signup_input"
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
              className="signup_input"
            />
            {/* <span className="error_msg ">Wrong format</span> */}
        </div>
        <div className="form_group">
          <button type='submit' className='signup_btn'>Sing Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup