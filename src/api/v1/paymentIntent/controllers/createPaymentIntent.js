const PaymentIntent = require('../../../../models/PaymentIntent');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const createPaymentIntent = async (req, res) => {
  try {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // Save payment details to MongoDB using Mongoose
    const payment = new PaymentIntent({
      price: price,
      clientSecret: paymentIntent.client_secret,
    });

    await payment.save();
    console.log('client payment intent success = ', paymentIntent.client_secret);
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error storing payment intent:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = createPaymentIntent;
