import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signin.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../config/firebaseConfig";
import { Alert } from "@mui/material";

const SignIn = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");
    const navigate = useNavigate();

    const handleLoginUser = async(e)=>{
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(authentication,email,password)
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    }

    const handleregisterUser=async(e)=> {
        e.preventDefault();
        setError("");
        try {
            await createUserWithEmailAndPassword(authentication,email,password);
            navigate('/')
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
        <h1>Sign-In</h1>
        {error && <Alert  variant="danger">{error}</Alert>}
        <form >
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            required
            autoComplete="none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            autoComplete="none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          onClick={handleLoginUser}
          className="login__signinbutton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to the AMAZON CLONE, You agree to our terms
          conditions , use & Sale.Please see our Privacy Policy, Cookies use and
          Interest Ads
        </p>
        <button 
        onClick={handleregisterUser}
        type='submit'
         className="login__signupbutton">Create Amazon Account</button>
      </div>
    </div>
  );
};

export default SignIn;
