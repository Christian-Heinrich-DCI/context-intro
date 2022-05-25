import { useCounter } from "./context/CounterContext";
import CounterLight from "./components/CounterLight";
import CounterDark from "./components/CounterDark";
import "./App.css";

function App() {
  const { counter, countReset } = useCounter();

  return (
    <div className="App">
      <header>
        <h2>Context Intro &mdash; App.js</h2>
        <p>Counter: {counter}</p>
        <p>
          <button onClick={countReset}>Reset</button>
        </p>
      </header>
      <CounterLight />
      <CounterDark />
    </div>
  );
}

export default App;
