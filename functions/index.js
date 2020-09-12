const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HQ6h6JCBlY3U5sJeiVJqdapTbVORZ8aHmZy4apmarECwPIO3Om81DHJQ3r3WUmf2DjUpqAuKL4jPP3YuchKOk2F00CkeGuxDr');

//API

//App config
const app = express();

//Middleware
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request, response)=> response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
        description:"stripe integration testing"
    })
    
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-98477/us-central1/api