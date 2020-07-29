import CartActionTypes from './cart.types'
import CartActionsTypes from './cart.types'
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
})