import React from 'react'
import CustomButton from '../../../component/button/button'
import './styles.scss'
const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing">
                <div className="landing-text">
                    <div>Why Reckon?</div>
                    
                    <div>
                        We build real<br/>connections...
                    </div>
                    <div>
                        Don't wait any more <br/>
                        Register to our communtiy and enjoy with others
                    </div>
                    <CustomButton>
                        Get Started
                    </CustomButton>
                </div>
                <div className="landing-image"/>
            </div>
        </div>
    )
}

export default Landing
