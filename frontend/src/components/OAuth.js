import React from 'react';
import './styles/OAuth.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import axios from 'axios'; // Import Axios for HTTP requests
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/reducers/userSlice';
import { useDispatch } from 'react-redux';

function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      console.log(result)

      const userData = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      };

      // Make POST request to login the user
      const response = await axios.post('http://localhost:3000/google', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response);

      if (response.data === 'success') {
        dispatch(signInSuccess(userData))
        navigate('/');
      }

    } catch (err) {
      console.log("Error signing in with Google:", err);
    }
  }

  return (
    <button type='button' onClick={handleClick} className="oauth-button">Continue With Google</button>
  )
}

export default OAuth;
