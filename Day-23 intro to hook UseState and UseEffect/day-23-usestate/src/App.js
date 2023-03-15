import "./App.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState();
  const handleChange = (event) => {
    setText(event.target.value);
  };
  // const state = useState("devnest");
  // console.log(state[0]);
  // console.log(state[1]);
  // const text = state[0];
  // const updateText = state[1];
  // const updateText1 = state[2];
  // console.log(text);
  // console.log(updateText);
  // console.log(updateText1);

  // let text = "devnest";
  // const handleChange = (event) => {
  //   text = event.target.value;
  //   console.log("updated value of text", text);
  // };
  return (
    <div className="App">
      <input type="text" name="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;
