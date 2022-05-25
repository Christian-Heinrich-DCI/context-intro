import { useCounter } from "../context/CounterContext";

export default function CounterDark() {
  const { counter, countUp, countDown } = useCounter();

  return (
    <section className="counter__dark">
      <h2>CounterDark</h2>
      <p>Counter: {counter}</p>
      <p>
        <button onClick={countDown}>-</button>
        <button onClick={countUp}>+</button>
      </p>
    </section>
  );
}
