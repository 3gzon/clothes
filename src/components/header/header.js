import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils'
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)