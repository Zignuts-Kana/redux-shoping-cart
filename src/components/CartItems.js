import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems &&
          cartItems.map((item) => {
            return (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  price={item.price}
                  name={item.name}
                  quantity={item.quantity}
                  total={item.totalPrice}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CartItems;
