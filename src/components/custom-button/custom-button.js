import React from 'react'
import "./custom-button.scss"
export default function customButton({ children, ...otherPorps }) {
    return (
        <button className="custom-button" {...otherPorps}>
            {children}
        </button>
    )
}
