import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
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
  };
  return (
    <div>
      <button onClick={handleClick}>Count:{count}</button>
    </div>
  );
};

export default Counter;
