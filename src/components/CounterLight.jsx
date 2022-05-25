import { useCounter } from "../context/CounterContext";

export default function CounterLight() {
  const { counter, countUp, countDown } = useCounter();

  return (
    <section className="counter__light">
      <h2>CounterLight</h2>
      <p>Counter: {counter}</p>
      <p>
        <button onClick={countDown}>-</button>
        <button onClick={countUp}>+</button>
      </p>
    </section>
  );
}
