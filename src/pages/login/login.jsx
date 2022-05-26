import axios from "axios";
import { React, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/styles/main.css";
import { useAuth } from "../../contexts/authContext";
import { loginFormReducer } from "../../reducer/authReducer";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const {authState, authDispatch}= useAuth();

  const [{email,password},loginDispatch] = useReducer(loginFormReducer, {email:"", password:""});

  const testHandler=()=>[
    loginDispatch({type:"SET_EMAIL",payload:"kumar@harsh.com"}),
    loginDispatch({type:"SET_PASSWORD",payload:"kumarharsh"})
  ]
  const submitHandler= async (e, email, password)=>{
  e.preventDefault();
  try{
  const response = await axios.post("api/auth/login", {email,password});

  localStorage.setItem("token", response.data.encodedToken)
  localStorage.setItem('userData', JSON.stringify(response.data.foundUser));
  authDispatch({ type: "USER_LOGIN" })
  authDispatch({ type: "USER_TOKEN", payload: response.data.encodedToken })
  authDispatch({ type: "USER_DATA", payload: response.data.foundUser })
  }catch(err){
    toast.error(err);
  }
  finally{
    navigate("/")
    toast.success("Welcome to SneakerXclub !" )
  }
  }
  

  return (
    <>
      <div id="login-container" className=" auth login-container ">
            <form className="form input-form card-container" onSubmit={(e)=> submitHandler(e, email,password)}>
                <div className="heading ">
                    <p>Log In</p>
                </div>

                <label className="ml-2" htmlFor="name">Email</label>
                <input className="input-text " value={email} type="email" placeholder="Enter your email here"
                onChange={(e)=> loginDispatch({type:"SET_EMAIL",payload:e.target.value})}
                />

                <label className="ml-2" htmlFor="name"> Password </label>
                <input className="input-text " value={password} type="password" placeholder="Enter your Password here"
                 onChange={(e)=> loginDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
                <button className="input-text btn h4 " type="submit">Log In </button>
                <button className="input-text btn h4 " onClick={testHandler}>  Test Credentials </button>
                <p className=" input-text small-text">Don't have an account ? <span id="signup"
                        className="link-redirect signup"><Link to="/signup">Sign Up </Link> </span>

                </p>
            </form>
        </div>
    </>
  );
};

export { Login };
