import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  handleGetQuantityOfItemInCart,
  getTotalItemsInCart,
}) {
  return (
    <section className={`sidebar ${isOpen}`}>
      <div className="wrapper">
        <button
          className={`toggle-button button ${isOpen}`}
          onClick={handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <ShoppingCart
          isOpen={isOpen}
          products={products}
          shoppingCart={shoppingCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          handleAddItemToCart={handleAddItemToCart}
          handleGetQuantityOfItemInCart={handleGetQuantityOfItemInCart}
          getTotalItemsInCart={getTotalItemsInCart}
          handleOnToggle={handleOnToggle}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        />
      </div>
    </section>
  );
}
