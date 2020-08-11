import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HF46yKXdFAJ4oZhn2lrRkDApalzsYdoN9FzhIVfPB64f2SlF5vyAFOn27f1AbTKaxwfzIUnqXBXZuO2M0hAAfQn00DaimOtrV'
    const onToken = token => {
        console.log(token)
        alert('Payment succesfull')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothes"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton