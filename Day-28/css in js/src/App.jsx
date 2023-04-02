import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "@emotion/react";

const button = css`
padding:8px,
color:white`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        css={css({
          backgroundColor: "lightgrey",
          color: "white",
          "&:hover": {
            backgroundColor: "royalblue",
            cursor: "pointer",
          },
        })}
      >
        <section
          css={css`
            display: grid;
            grid-template-rows: auto 200px;
          `}
        >
          <h1>this is a section</h1>
          <p>this is a para</p>
        </section>
      </div>
      <div>
        <button css={button}>button</button>
      </div>
    </>
  );
}

export default App;
