import stripe
from flask import Flask, render_template

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

import os
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

@app.route('/checkout')
def checkout():
    intent = stripe.PaymentIntent.create(
        amount=1099,
        currency='usd',
        automatic_payment_methods={'enabled': True}
    )
    return render_template('checkout.html', client_secret=intent.client_secret)

@app.route('/order/complete')
def complete():
    return "Payment Complete!"

if __name__ == '__main__':
    app.run(port=4242, debug=True)
