import React from "react";
import { useReducer } from "react";
import reducer from "./counterReducer";

export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  function increaseCounter() {
    dispatch("increase");
  }
  function decreaseCounter() {
    dispatch("decrease");
  }

  return (
    <>
      <button onClick={increaseCounter}>+</button>
      {count}
      <button onClick={decreaseCounter}>-</button>
    </>
  );
}
