import React from 'react'
import Login from "./login/login";
import Header from '../homepage/header/header';
import Signup from "./signup/signup"
const LoginSignupPage = (props) => {
    console.log(props)
    return (
        <>
        <Header loginSignUp/>
        <div className="login-signup-wrapper">
            
            {
                props.match.path==="/register"?<Signup/>:<Login/>
            }
        </div>
        </>
    )
}

export default LoginSignupPage
