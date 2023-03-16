import React, { useState } from "react";
import "./index.css";

function List() {
  const getItems = () => {
    console.log("%c get item called", "color:royalblue");
    return Array(50).fill(0);
  };
  const [items, setItems] = useState(getItems());
  return (
    <div className="card">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 0])}>Add items</button>
    </div>
  );
}

export default List;
