import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './checkoutForm.css';

function CheckoutForm() {
  const [error, seteError] = useState()
  const [clientSecret,setClientSecret] = useState("") // response from server;
  const stripe = useStripe();
  const elements = useElements();

   const handleSubmit = async (event) => {
     event.preventDefault();
     if (!stripe || !elements) {
       return;
     }
     const card = elements.getElement(CardElement);
     if (card == null) {
       return;
     }
     const { error, paymentMethod } = await stripe.createPaymentMethod({
       type: "card",
       card,
     });
     if (error) {
       console.log("[error]", error);
       seteError(error.message)
     } else {
       console.log("[PaymentMethod]", paymentMethod);
     }

     const { paymentIntent,error:  confirmError} = await stripe.confirmCardPayment(
      clientSecret,
       {
         payment_method: {
           cart: card,
           billing_details: {
             name: "USER_NAME",
             email: 'Email'
           }
         }
       }
     )
     if (confirmError) {
       seteError(confirmError.message);
     }




   };
  return (
    <>
      <form onSubmit={handleSubmit} className=" payment-form">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="px-5 py-3 btn btn-primary mt-5 mx-auto"
          disabled={!stripe   }
        >
          Pay
        </button>
      </form>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
}

export default CheckoutForm;