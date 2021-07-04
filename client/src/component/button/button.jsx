import React from 'react'

const CustomButton = ({children,purple}) => {
    return (
        <div className="custom-button-container" style={{backgroundColor:`${purple?"#A239EA":"#fff"}`,color:`${purple?"#fff":"#A239EA"}`}}>
            <span>{children}</span>
        </div>
    )
}

export default CustomButton
