require('dotenv').config();
// Initialize Stripe with your publishable key
const stripe = Stripe('PUBLISH_SECRET_KEY')

// Retrieve the "payment_intent_client_secret" query parameter appended to
// your return_url by Stripe.js
const clientSecret = new URLSearchParams(window.location.search).get(
    'payment_intent_client_secret'
);

// Retrieve the PaymentIntent
stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
    const message = document.querySelector('#message')

    switch (paymentIntent.status) {
        case 'succeeded':
            message.innerText = 'Success! Payment received.';
            break;

        case 'processing':
            message.innerText = "Payment processing. we'll update you when payment is received.";
            break;

        case 'requires_payment_method':
            message.innerText = 'Payment failed. please try another payment method.';
            break;

        default:
            message.innerText = 'Somthing went wrong.';
            break;
    }
});