import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("pointermove", (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      console.log("pointer move event");
    });
    return window.removeEventListener("pointermove");
  }, []);
  return (
    <div>
      x:{cursorPosition.x}, y:{cursorPosition.y}
    </div>
  );
}

export default UseEffectExample;
