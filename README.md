# 🧾 Stripe Checkout Integration with Flask

This project demonstrates how to integrate **Stripe Checkout** into a **Flask** web application using **Stripe Elements** and **PaymentIntent API**.

## 📦 Project Structure

project/

│
├── app.py # Flask app with route for checkout page

├── server.py # One-time script to create a PaymentIntent (can be removed if unused)

├── templates/

│ └── checkout.html # HTML page to display Stripe Checkout form

├── static/

│ ├── checkout.js # JavaScript logic to handle Stripe Elements

│ └── status.js # (Optional) Payment status handling script

├── .env # Environment variables (STRIPE keys)

├── r.txt # Requirements file

└── README.md # This file


## 🚀 Setup Instructions

### 1. 📥 Clone the repository

```bash
git clone https://github.com/yourusername/stripe-flask-checkout.git
cd stripe-flask-checkout
```


### 2. 📦 Install Dependencies
```bash
pip install -r r.txt
```

### 3. 🔐 Setup Environment Variables
Create a .env file in the root folder and add your Stripe keys:

```bash
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

In checkout.js and status.js, replace: const stripe = Stripe("PUBLISH_SECRET_KEY");
with: const stripe = Stripe("pk_test_your_publishable_key_here");

### 4. 📂 File Organization Notes
Put checkout.js and status.js inside a static/ folder.

Make sure Flask can find checkout.html inside the templates/ folder.

### 5. ▶️ Run the Flask App
```bash
python app.py
```

Visit http://localhost:4242/checkout in your browser.
