import React from 'react'

import Header from '../header/header'
import CustomButton from '../../../component/button/button'

const Landing = () => {
   
    return (
        <div className="landing-container">
            <Header/>
            <div className="landing">
                <div className="landing-left">
                    <div className="landing-left-image">
                       
                    </div>
                </div>
                <div className="landing-right">
                    <div className="landing-text">
                        <div className="landing-right-header">Make new connections here</div>
                        <div className="landing-right-punchline">
                            Time to be social,go social
                        </div>
                        
                        <div className="landing-right-description">
                            Get in touch with your friends,relatives and business cooperators in a matter of seconds.
                            Surround yourself with people who not just support you and stay with you, but inform your thinking about ways to WOW your online presence
                        </div>
                        <div className="landing-right-button-group">
                            <CustomButton purple>Get Started</CustomButton>
                            <CustomButton>Login</CustomButton>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Landing
