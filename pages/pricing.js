import CheckoutButton from '../components/CheckoutButton';

const PricingPage = () => (
  <div>
    <h1>Pricing</h1>
    <div>
      <h2>Basic Plan</h2>
      <p>$10/month</p>
      <CheckoutButton priceId="price_1IHzdG2eZvKYlo2C1m8kFG1p" />
    </div>
    <div>
      <h2>Premium Plan</h2>
      <p>$30/month</p>
      <CheckoutButton priceId="price_1IHzdG2eZvKYlo2C1m8kFG2q" />
    </div>
  </div>
);

export default PricingPage;
