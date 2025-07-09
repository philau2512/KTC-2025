import React, { useState } from "react";

function Counter01() {
  const [ count, setCount ] = useState(0);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
    </>
  );
}

export default Counter01;
