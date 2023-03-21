import React from "react";
import { useRef } from "react";

export default function Counter() {
  console.log("counter rendered");
  const count = useRef(0);
  function handleClick() {
    count.current = count.current + 1;
    alert("click count:" + count.current);
  }
  return <button onClick={handleClick}>click me</button>;
}
