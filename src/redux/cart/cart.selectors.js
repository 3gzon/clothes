import { createSelector } from 'reselect'

//first type of selector(input selector)
const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)
