// pages/api/stripe-webhook.ts
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../utils/stripe";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"]!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.BASE_URL}/success`,
        cancel_url: `${process.env.BASE_URL}/cancel`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Payment succeeded:", session);
      // Fulfill the purchase...
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
}
