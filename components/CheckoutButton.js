import React from 'react';

const CheckoutButton = ({ priceId }) => {
  const handleClick = async () => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <button onClick={handleClick}>
      Buy Now
    </button>
  );
};

export default CheckoutButton;
