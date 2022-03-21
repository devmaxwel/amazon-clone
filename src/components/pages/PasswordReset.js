import { Alert } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth'
import './signin.css'
import { authentication } from '../config/firebaseConfig';

const PasswordReset = () => {

        const [error, setError] = useState("");
        const [message, setMessage] = useState("");
        const [email, setEmail] = useState("");
        const navigate =useNavigate();

        const handleResetPassword= async(e)=>{
            e.preventDefault();
            setError("");
            try {
                await sendPasswordResetEmail(authentication,email)
                setMessage("Password reset email has been sent to Your Email")
                setTimeout(() => {
                    navigate('/signin');
                },5000)
            } catch (err) {
                setError(err.message);
            }
        }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://microsoftcaregh.com/wp-content/uploads/2020/10/amazon-kenya.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h3 style={{
            marginBottom:"15px",
            fontSize:"20px"
        }}>Amazon Password Reset</h3>
        {error ||
          (message && <Alert variant={error?"danger":"success"}>{error || message}</Alert>)}
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            required
            autoComplete="none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleResetPassword}
            className="login__signinbutton"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        <p>
          By reseting-Password you agree to the AMAZON CLONE, You agree to our terms
          conditions , use & Sale.Please see our Privacy Policy, Cookies use and
          Interest Ads
        </p>
      </div>
    </div>
  );
}

export default PasswordReset