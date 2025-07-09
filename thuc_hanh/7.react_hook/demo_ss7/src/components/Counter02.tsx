import React, { useEffect, useState } from "react";

function Counter02() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Watch here");
    window.document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <h2>Click here to increase the count</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Counter02;
