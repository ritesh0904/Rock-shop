import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishablekey = 'pk_test_51IajGSSCgYuMgsgpCZWdouZKGC3csvDIwv1S2ieFnyZSlXVQA4eXkWwGHrupqFIJ6mkuCUYihANPnEvO81ei3YYv00gpbtO8t3';

    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='shoppers-point Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You have to pay ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )

}

export default StripeCheckoutButton;
