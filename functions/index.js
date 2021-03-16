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

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-596ae/us-central1/api