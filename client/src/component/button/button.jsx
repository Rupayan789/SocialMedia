import React from 'react'
import './styles.scss'
const CustomButton = ({children}) => {
    return (
        <div className="custom-button-container">
            <span>{children}</span>
        </div>
    )
}

export default CustomButton
