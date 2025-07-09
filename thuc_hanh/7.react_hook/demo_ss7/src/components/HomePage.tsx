import React, { useContext } from "react";
import CartContext from "./CartContext";

function HomePage() {
  const cartInfo = useContext(CartContext);

  return (
    <>
      User ID: {cartInfo.userId}
      <br></br>
    </>
  );
}

export default HomePage;
