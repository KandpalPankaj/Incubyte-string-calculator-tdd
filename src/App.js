import React, { useState } from "react";
import { add } from "./utils/calculatorUtils";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p className="error">{error}</p>}
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;
