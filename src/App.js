import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const resetTimer = () => {
    setTimer(10); // Reset the timer to 10 seconds
  };

  useEffect(() => {
    if (timer === 0) {
      resetTimer(); // Reset the timer when it reaches 0
    }
  }, [timer]);

  return (
    <div className="App">
      <h1>Timer: {timer} seconds</h1>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default App;
