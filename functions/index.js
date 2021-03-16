const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_Rb4ZZWjY2eXjHTLZ8kDPUfCQ00Kxhoaogu')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received BOOM!!! for this amount', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-596ae/us-central1/api