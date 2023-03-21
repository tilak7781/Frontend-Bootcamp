import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("initial");
  console.log("counter rendered", count);
  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  const handleClick = () => {
    setCount((nextCount) => nextCount + 1);
    setCount((nextCount) => nextCount + 1);
    setCount((nextCount) => nextCount + 1);
    setCount((nextCount) => nextCount + 1);
    setText(`${text} ${count}`);
    console.log("after click", count);
  };
  return (
    <div>
      <button onClick={handleClick}>Count:{count}</button>
      {text}
    </div>
  );
};

export default Counter;
