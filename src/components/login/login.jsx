import { React } from "react";
import "../styles/main.css";

const Login = () => {
  return (
    <>
      <div id="login-container" className="login-container ">
            <form className="form input-form card-container">
                <div className="heading ">
                    <p>Log In</p>
                </div>

                <label className="ml-2" for="name">Email</label>
                <input className="input-text " type="email" placeholder="Enter your email here"/>

                <label className="ml-2" for="name"> Password </label>
                <input className="input-text " type="email" placeholder="Enter your Password here"/>
                <button className="input-text btn h4 ">Log In </button>
                <p className=" input-text small-text">Don't have an account ? <span id="signup"
                        className="link-redirect signup"><a href="./signup.html">Sign Up </a> </span>

                </p>
            </form>
        </div>
    </>
  );
};

export { Login };
