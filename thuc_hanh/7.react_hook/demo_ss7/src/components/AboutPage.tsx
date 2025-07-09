import React, { useContext } from "react";
import CartContext from "./CartContext";

function AboutPage() {
  const cartInfo = useContext(CartContext);

  return (
    <>
      CardId: {cartInfo.cardId}
      <br></br>
      Username: {cartInfo.username}
      <br></br>
    </>
  );
}

export default AboutPage;
