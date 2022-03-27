import axios from "axios";
import React,{useReducer} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import "../../components/styles/main.css";
import { signupFormReducer } from "../../reducer/authReducer";
import { useAuth } from "../../contexts/authContext";

const Signup = ()=>{
    const navigate = useNavigate();
    const {authDispatch}= useAuth();
    const [{firstName,lastName, email,password},signupDispatch] = useReducer(signupFormReducer, {firstName:"",lastName:"",email:"", password:""});
    const submitHandler= async (e, firstName,lastName, email,password)=>{
     e.preventDefault();
     try{
     const response = await axios.post("api/auth/signup", {firstName,lastName,email,password});
     console.log(response);
     localStorage.setItem("token", response.data.encodedToken)
     localStorage.setItem('userData', JSON.stringify(response.data.createdUser));
     authDispatch({ type: "ADD_TOKEN", payload: response.data.encodedToken })
    }
    catch(err){
      console.log(err);
    }
    finally{
      navigate("/")
    
    }
}

    return( 
        <>  
      <div id="signup-container" className=" auth signup-container">
            <form className="form input-form card-container" onSubmit={(e)=> submitHandler(e, firstName,lastName, email, password)}>
                <div className="heading ">
                    <p>Sign Up</p>
                </div>
                <label className="ml-2" htmlFor="name">First Name</label>
                <input className="input-text" value={firstName} type="text" placeholder="Enter your First name here" onChange={(e)=> signupDispatch({type:"SET_FIRST_NAME", payload:e.target.value})}/>

                <label className="ml-2" htmlFor="name">Last Name</label>
                <input className="input-text" value={lastName} type="text" placeholder="Enter your Last name here" onChange={(e)=> signupDispatch({type:"SET_LAST_NAME", payload:e.target.value})}/>
                <label className="ml-2" htmlFor="name">Email</label>
                <input className="input-text " value={email} type="email" placeholder="Enter your email here"
                onChange={(e)=> signupDispatch({type:"SET_EMAIL",payload:e.target.value})}
                />

                <label className="ml-2" htmlFor="name"> Password </label>
                <input className="input-text " type="password" value={password} placeholder="Enter your Password here"
                 onChange={(e)=> signupDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
                <button className="input-text btn  h4" type="submit">Sign up</button>
                <p className=" input-text small-text">Already have an Account <span id="login" className="link-redirect "><Link
                            to="/login">Log In</Link>
                    </span>
                </p>
            </form>
        </div>
        </>
    )
}

export {Signup}