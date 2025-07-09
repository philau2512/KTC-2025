// import React, {useState} from "react";

import useWindowSize from "../hooks/useWindowSize";

function MyShop05() {
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>Window Width: {width}</h2>
      <h2>Window Height: {height}</h2>
    </>
  );
}

export default MyShop05;
