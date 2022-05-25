import { useState, createContext, useContext, useEffect } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  // setCounter wird nicht nach außen gegeben, sondern intern in
  // Funktionen benutzt und nur *diese* Funktionen nach außen gegeben

  // Funktion als Initialwert eines States wird ausgeführt und dann der
  // Return-Wert als Startwert des States gesetzt
  // Oft wichtig, wenn etwas *als erstes* ausgeführt werden soll und
  // danach nie wieder, oder wenn es eine komplexe Berechnung ist
  const [counter, setCounter] = useState(() => {
    // Gibt es schon etwas im Local Storage?
    // values im Local Storage sind immer Strings!
    const counter = parseInt(localStorage.getItem("counter"));
    // Falls ja, dann setzen wir den State auf den Inhalt des Local Storage
    // ansonsten setzten wir ihn auf 0
    if (isNaN(counter)) return 0;
    else return counter;
  });

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  // Counter-Funktion, die den Counter um 1 hoch zählt
  const countUp = () => {
    setCounter(counter + 1);
    // localStorage.setItem("counter", counter + 1);
  };

  // Counter-Funktion, die den Counter um 1 runter zählt
  const countDown = () => {
    setCounter(counter - 1);
    // localStorage.setItem("counter", counter - 1);
  };

  // Counter-Funktion, die den Counter auf 0 zurücksetzt
  const countReset = () => {
    setCounter(0);
    // localStorage.setItem("counter", 0);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        countUp,
        countDown,
        countReset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
