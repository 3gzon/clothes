import React from 'react'
import "./custom-button.scss"
export default function customButton({ children, isGoogleSignIn, inverted, ...otherPorps }) {
    return (
        <button className={`${inverted ? 'inverted' : ''} custom-button`}
            {...otherPorps}
        >
            {children}
        </button>
    )
}
