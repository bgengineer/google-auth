import React, { useState } from 'react';
import axios from 'axios';
import './styles/SignUpPage.css'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess } from '../redux/reducers/userSlice';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const response = await axios.post('http://localhost:3000/login', {
       // username,
        email,
        password,
      });
      const data = response.config.data;
      dispatch(signInSuccess(data))

      if(response.data === "success"){    
        navigate('/')
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign In</h1>
      <form onSubmit={handleSubmit} className="signup-form">
       
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
          SIGN IN
        </button>
        <OAuth />
      <p>Don't have an Account? <Link to = '/signup'>SignUp</Link></p>
      </form>
    </div>
  );
};

export default SignInPage;
