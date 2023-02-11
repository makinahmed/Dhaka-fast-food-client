import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
 

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
console.log(stripePromise);

function Payment( ) {

    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className=" border border-1 p-5 justify-content-center">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment;