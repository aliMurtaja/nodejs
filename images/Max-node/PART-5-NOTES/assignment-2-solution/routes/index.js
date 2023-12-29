const path = require('path');

const express = require('express');

const stripe = require('stripe')('sk_test_51OLrprCyodqE8MSYzGPXULc168IRhDu6bkOyifVyPnUvPKcVKsUDoQTvoPIHgEcU4jafMmOZcjkCBLkho0C9xi7I00ZRi69j5v');

const router = express.Router();

// router.get('/create-customer', async(req, res, next) => {
    
//     const customer = await stripe.customers.create({
//         name: 'Jenny Rosen',
//         email: 'jennyrosen@example.com',
//     });

//     res.status(201).json({
//         customer
//     });

// });

router.post('/create-setup-intent', async(req, res, next) => {

    console.log("req.body.customerId 1", req.body.customerId)
   
    const setupIntent = await stripe.setupIntents.create({
        customer: req.body.customerId,
        // automatic_payment_methods: {
        //     enabled: true,
        // },
    });

    console.log("req.body.customerId 2",req.body.customerId, req.body.email, setupIntent.client_secret)

    res.status(201).json({
        setupIntent
    });

});

module.exports = router;