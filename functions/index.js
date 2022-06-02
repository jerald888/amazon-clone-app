const functions = require("firebase-functions"); /* 16.6 */
const express = require("express"); /* 16.6 */
const cors = require("cors");
const { useDebugValue } = require("react");
/* 16.6 needed to intgrate the backend to frontend */

// eslint-disable-next-line max-len
const stripe = require("stripe")(
  "sk_test_51L0WEXSC7n43Oc1JH1kBbBTiD4nud8qF57IG9c4vn1sqFAN16f9dS8PqilDbTWxpid70sJEqzIy764V7HIIZjw0E00S5CqsHXt"
);

// app config below

const app = express(); /* 16.6 */

// middleware below

app.use(cors({ origin: true })); /* 16.6 */
app.use(express.json()); /* 16.6 */

// api routes below

app.get("/", (request, response) => {
  response.status(200).send("hello this is backend page home");
});

app.get("/test/test", async (request, response) => {
    response.status(200).send("yayayay")
});

app.post("/payments/create", async (request, response) => {
  /* 16.6 */
  const total = request.query.total; /* 16.6 */

  console.log("the total amount is", total); /* 16.6 */

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
     /* 16.6 error .... **** changed usd to inr because the default currency in your stripe account is inr so use that else payment method error comes and payment intent won't be created */
  });

  response.status(201).send({
    /* 16.6 */

    clientSecret: paymentIntent.client_secret
  });
});

// listen ports below

exports.api = functions.https.onRequest(app); /* 16.6 */

//http://localhost:5001/clone-app-55d61/us-central1/api
