import { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterReducer from "./CounterReducer";

class ErrorBoundry extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }
    return this.props.children;
  }
}

function FallbackComponent({ error }) {
  return (
    <div>
      <p>something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function AppLevelFallbackComponent({ error }) {
  return (
    <div>
      <p>App Level</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function Breaker() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      if (prev > 2) {
        throw new Error("Boom 💥");
      }
      return prev + 1;
    });
  }
  return <button onClick={handleClick}>{count}</button>;
}

function AnotherComponent() {
  return <h1>Component for displaying some other info</h1>;
}

function App() {
  return (
    <ErrorBoundry FallbackComponent={AppLevelFallbackComponent}>
      <div className="App">
        {/* <ErrorBoundry FallbackComponent={FallbackComponent}>
        <Breaker />
        </ErrorBoundry>
        <AnotherComponent /> */}
        <CounterReducer />
      </div>
    </ErrorBoundry>
  );
}

export default App;
