import React from "react";
import "../styles/main.css";

const Signup = ()=>{
    return( 
        <>
      <div id="signup-container" className="signup-container">
            <form className="form input-form card-container">
                <div className="heading ">
                    <p>Sign Up</p>
                </div>
                <label className="ml-2" for="name">Name</label>
                <input className="input-text" type="text" placeholder="Enter your name here"/>

                <label className="ml-2" for="name">Email</label>
                <input className="input-text " type="email" placeholder="Enter your email here"/>

                <label className="ml-2" for="name"> Password </label>
                <input className="input-text " type="email" placeholder="Enter your Password here"/>
                <button className="input-text btn  h4">Sign up</button>
                <p className=" input-text small-text">Already have an Account <span id="login" className="link-redirect "><a
                            href="./login.html">Log In</a>
                    </span>
                </p>
            </form>
        </div>
        </>
    )
}

export {Signup}