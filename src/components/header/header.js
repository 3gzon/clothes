import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
export default function header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
            </div>
        </div>
    )
}
