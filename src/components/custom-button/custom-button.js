import React from 'react'
import "./custom-button.scss"
export default function customButton({ children, isGoogleSignIn, ...otherPorps }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherPorps}
        >
            {children}
        </button>
    )
}
