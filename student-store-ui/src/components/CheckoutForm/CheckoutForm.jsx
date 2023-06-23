import React, { useState } from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  subtotal,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showReceipt, setShowReceipt] = useState("");

  const handleCheckout = () => {
    // Simulate sending a receipt to the provided email address
    //sendReceipt(name, email);
    // Show the receipt and thank you message
    setShowReceipt(true);
  };

  return (
    <>
      <div className="checkout-form">
        <h3>
          Payment Info
          <span className="button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              className="checkout-form-input"
              type="text"
              placeholder="Student Name"
              value={checkoutForm.name}
              onChange={handleOnCheckoutFormChange}
              required
            />
          </div>
        </div>
        <div className="input-field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="email"
              className="checkout-form-input"
              type="text"
              placeholder="student@codepath.org"
              value={checkoutForm.email}
              onChange={handleOnCheckoutFormChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input name="termsAndConditions" type="checkbox" />
              <span className="label">
                I agree to the
                <a href="#terms-and-conditions"> terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        <p className="is-danger"></p>
        <div className="field">
          <div className="control">
            <button className="button checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        {!showReceipt ? (
          <div className="content">
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>
        ) : (
          <div className="card">
            <header className="card-head">
              <h4 className="card-title">Receipt</h4>
            </header>
            <section className="class-body">
              <p className="header">Showing receipt for</p>
              <ul className="purchase">
                {shoppingCart.map((product) => {
                  return (
                    <li>{`${product.quantity} total ${
                      product.name
                    } purchased at a cost of ${formatter.format(
                      product.price
                    )} for a total cost of ${formatter.format(
                      product.price * product.quantity
                    )} `}</li>
                  );
                })}
                <li>{`Before taxes, the subtotal was ${formatter.format(
                  subtotal
                )}`}</li>
                <li>{`After taxes and fees were applied, the total comes out to ${formatter.format(
                  subtotal * 1.0875
                )}`}</li>
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
