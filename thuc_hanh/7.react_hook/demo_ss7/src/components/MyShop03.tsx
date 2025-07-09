import React, { useMemo, useState } from "react";

function MyShop03() {
  const [text, setText] = useState("Hello");

  const ChildComponent = ({ text }: { text: string }) => {
    console.log("Child component rendered");
    return <>{text}</>;
  };

  const MemoizedComponent = useMemo(
    () => <ChildComponent text={text} />,
    [text]
  );

  return (
    <>
      <h1>My Shop</h1>
      <button onClick={() => setText("Hello")}>Say Hello</button>
      <button onClick={() => setText("Goodbye")}>Say Goodbye</button>
      {MemoizedComponent}
    </>
  );
}

export default MyShop03;
