import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe takes price in cents
  const publishableKey =
    'pk_test_51Ib1gKSFU2UeFkhA0ZS7dV1NipDvKb51KfqWKCVXtH8zDT0ubIYZmHmC0ClcUJ70exviSeAhbd8QpSmIp3segHAh00zQ0EbwqG';

  const onToken = token => {
    // console.log('token:', token);
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(() => {
        alert('Payment successful!');
      })
      .catch(error => {
        console.error('Payment error:', JSON.parse(error));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
