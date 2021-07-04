import React from 'react'
import CustomButton from '../../../component/button/button'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <ul>
                    <li>Social</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Contact Us</li>
                    <li>FaQ</li>
                </ul>
                <ul>
                    <li><CustomButton purple>Create Account</CustomButton></li>
                    <li><CustomButton>Login</CustomButton></li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Header
