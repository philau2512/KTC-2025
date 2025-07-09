// import React, { useState } from "react";
import CartContext from "./CartContext";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function MyShop() {
  const cartInfo = {
    userId: 1,
    cardId: 1,
    username: "Tèo",
  };
  return (
    <>
      <CartContext.Provider value={cartInfo}>
        <HomePage />
        <AboutPage />
      </CartContext.Provider>
    </>
  );
}

export default MyShop;
