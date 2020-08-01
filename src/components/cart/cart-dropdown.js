import React from 'react'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartDropdown)