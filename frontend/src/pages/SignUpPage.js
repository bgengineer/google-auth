import React, { useState } from 'react';
import axios from 'axios';
import './styles/SignUpPage.css'
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUpPage = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email,
        password,
      });
      if(response.data === "SignUp successfully"){
             navigate('/signin')
      }else{
        window.alert("user already exist")
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">name</label>
        <input
          type="text"
          id="username"
          name="name"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">
          SIGN UP
        </button>
        <OAuth />
      </form>
    </div>
  );
};

export default SignUpPage;
