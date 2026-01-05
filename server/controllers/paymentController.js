const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tool = require('../models/Tool');
const User = require('../models/User');

exports.createCheckoutSession = async (req, res) => {
  try {
    const { toolId } = req.body;
    const userId = req.userId;

    const tool = await Tool.findById(toolId);
    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tool.name,
              description: tool.description,
            },
            unit_amount: tool.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/dashboard?payment=success`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?payment=cancelled`,
      metadata: {
        userId: userId.toString(),
        toolId: toolId.toString()
      }
    });

    res.json({ paymentUrl: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Webhook handler for Stripe events
exports.stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Update user's purchases
    await User.findByIdAndUpdate(
      session.metadata.userId,
      {
        $push: {
          purchases: {
            toolId: session.metadata.toolId,
            transactionId: session.id,
            amount: session.amount_total / 100 // Convert from cents
          }
        }
      }
    );
  }

  res.json({ received: true });
};