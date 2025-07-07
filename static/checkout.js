require('dotenv').config();
// Wait until the full HTML document is loaded before running the code
document.addEventListener("DOMContentLoaded", async () => {
    // Initialize Stripe using your **publishable** key
    const stripe = Stripe("PUBLISH_SECRET_KEY");

    // Get the PaymentIntent `client_secret` passed from Flask (in the HTML data attribute)
    const clientSecret = document.querySelector("#payment-form").dataset.secret;

    // Optional: Define the appearance of the Stripe Elements UI
    const appearance = { theme: 'stripe' };
    // Create Stripe Elements instance with the client secret and appearance options
    const elements = stripe.elements({ clientSecret, appearance });

     // Create the actual Payment Element (credit card form UI)
    const paymentElement = elements.create('payment');
    // Mount (attach) the Payment Element into the HTML div with id="payment-element"
    paymentElement.mount("#payment-element");

    // Select the form element by its ID
    const form = document.getElementById("payment-form");
    // Handle form submission
    form.addEventListener("submit", async (event) => {
        // Prevent the browser from submitting the form normally
        event.preventDefault();
        // Confirm the payment using Stripe.js
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // After payment, redirect to this URL (your success page)
                return_url: "http://localhost:4242/order/complete",
            },
        });

        // If there's an error (e.g., declined card), show it to the user
        if (error) {
            const messageContainer = document.querySelector("#error-message");
            messageContainer.textContent = error.message;
        }
    });
});
