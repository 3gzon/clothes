import React from 'react'
import { Link } from 'react-router-dom'
// import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { auth } from '../../firebase/firebase.utils'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles'
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" className="option">SHOP</OptionLink>
            <OptionLink to="/contact" className="option">CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionDiv to="/signin">SIGN IN</OptionDiv>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />
        }
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)