import React from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  getTotalItemsInCart,
  handleOnToggle,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let subtotal = 0;

  return (
    <div className="shopping-cart">
      {isOpen == "closed" ? (
        <div className="cart-icons">
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48">monetization_on</i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48">fact_check</i>
          </span>
        </div>
      ) : (
        <div className="open">
          <h3 className="">
            Shopping Cart{" "}
            <span className="button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          {!(shoppingCart.length > 0) ? (
            <div className="notification">
              No items added to cart yet. Start shopping now!
            </div>
          ) : (
            <div className="CartTable">
              <div className="header">
                <div className="header-row">
                  <span className="flex-2">Name</span>
                  <span className="center">Quantity</span>
                  <span className="center">Unit Price</span>
                  <span className="center">Cost</span>
                </div>
                {shoppingCart.map((product) => {
                  subtotal += product.quantity * product.price;
                  return (
                    <CartItem
                      key={product.id}
                      product={product}
                      quantity={product.quantity}
                    />
                  );
                })}
              </div>
              <div className="receipt">
                <div className="receipt-subtotal">
                  <span className="label">Subtotal</span>
                  <span></span>
                  <span></span>
                  <span className="center subtotal">
                    {formatter.format(subtotal)}
                  </span>
                </div>
                <div className="receipt-taxes">
                  <span className="label">Taxes and Fees</span>
                  <span></span>
                  <span></span>
                  <span className="center">
                    {formatter.format(subtotal * 0.0875)}
                  </span>
                </div>
                <div className="receipt-total">
                  <span className="label">Total</span>
                  <span></span>
                  <span></span>
                  <span className="center total-price">
                    {formatter.format(subtotal * 1.0875)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <CheckoutForm
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        </div>
      )}
    </div>
  );
}

const CartItem = ({ product, quantity }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{product.name}</span>
      <span className="center cart-product-quantity">{quantity}</span>
      <span className="center cart-product-price">
        {formatter.format(product.price)}
      </span>
      <span className="center cart-product-subtotal">
        {formatter.format(product.price * quantity)}
      </span>
    </div>
  );
};
