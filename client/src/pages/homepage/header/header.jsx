import React from 'react'
import CustomButton from '../../../component/button/button'
import { useHistory } from 'react-router'
const Header = (props) => {
    const history=useHistory();
    // console.log(props)

    return (
        <div className="header-container" style={{position:`${props.loginSignUp?"static":"absolute"}`}}>
            <div className="header">
                <ul style={{color:`${props.loginSignUp?"black":"#fff"}`}}>
                    <li>Social</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Contact Us</li>
                    <li>FaQ</li>
                </ul>
                <ul>
                    <li style={{ display:`${history.location.pathname==="/register"?"none":"static"}` }}><CustomButton purple>Create Account</CustomButton></li>
                    <li style={{ display:`${history.location.pathname==="/login"?"none":"static"}` }}><CustomButton>Login</CustomButton></li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Header
