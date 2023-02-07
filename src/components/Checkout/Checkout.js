import React from "react";
import "./checkout.css";
import { useForm } from "react-hook-form";
function Checkout() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <div className="biling-details">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input {...register("firstname")} type="text" id="firstname" />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input {...register("lastname")} type="text" id="lastname" />
            </div>
            <div>
              <label htmlFor="companyname">Company Name (optional)</label>
              <input
                {...register("companyname")}
                type="text"
                id="companyname"
              />
            </div>
            <div>
              <label htmlFor="region">Region </label>
              <input
                {...register("region", { required: true })}
                type="text"
                id="region"
              />
            </div>
            <div>
              <label htmlFor="streetaddress">Street Address </label>
              <input
                {...register("streetaddress", { required: true })}
                type="text"
                id="streetaddress"
              />
            </div>
            <div>
              <label htmlFor="city">Town/City</label>
              <input
                {...register("city", { required: true })}
                type="text"
                id="city"
              />
            </div>
            <div>
              <label htmlFor="state">State </label>
              <input
                {...register("state", { required: true })}
                type="text"
                id="state"
              />
            </div>
            <div>
              <label htmlFor="zipcode">ZIP Code </label>
              <input
                {...register("zipcode", {
                  required: true,
                })}
                type="text"
                id="state"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number </label>
              <input
                {...register("phone", {
                  required: true,
                  pattern: /^(\+\d{1,3}[- ]?)?\d{11}$/,
                })}
                type="text"
                id="phone"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="coupon">Coupon</label>
              <input
                {...register("coupon", { required: true })}
                type="text"
                placeholder="If you have"
                id="coupon"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div className="order-list">
            <div>
              <h3>Product(s)</h3>
              <h3>$Subtotal</h3>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <span>Red Velvet Cake * quantity</span>
              <span>Price</span>
            </div>
            <div>
              <h3>Subtotal</h3>
              <h3>$Amount</h3>
            </div>
            <div>
              <h3>Shipping</h3>
              <input
                type="radio"
                name="shipping"
                id="shipping1"
                value="FreeShipping"
                {...register("shipping", { required: true })}
              />
              <label className="mx-2" htmlFor="shipping1">
                Free Shipping
              </label>
              <input
                type="radio"
                name="shipping"
                id="shipping2"
                value="LocalPickup"
                {...register("shipping", { required: true })}
              />
              <label className="mx-2" htmlFor="shipping2">
                Local Pickup
              </label>
            </div>
            <div>
              <h3>Total</h3>
              <h3>$Amount</h3>
            </div>
            <div>
              <h3>Payment</h3>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  value="cashondelivery"
                  name="moneytransfer"
                  id="cashondelivery"
                  {...register("moneytransfer", { required: true })}
                />
                <label htmlFor="cashondelivery">Cash on delivery</label>
              </div>
            </div>
            <div>
              <div>
                <input
                  {...register("moneytransfer", { required: true })}
                  type="radio"
                  name="moneytransfer"
                  id="stripe"
                />
                <label htmlFor="stripe">Stripe</label>
              </div>
            </div>
            <div>
              <div>
                <input
                  {...register("moneytransfer", { required: true })}
                  type="radio"
                  name="moneytransfer"
                  id="mobilebanking"
                />
                <label htmlFor="mobilebanking">Mobile Banking</label>
              </div>
            </div>
            <div>
              <div>
                <input
                  {...register("moneytransfer", { required: true })}
                  type="radio"
                  name="moneytransfer"
                  id="mobilebanking"
                />
                <label htmlFor="mobilebanking">Mobile Banking</label>
              </div>
            </div>
          </div>
          <input className="placeOrder" value="Place Order" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Checkout;
