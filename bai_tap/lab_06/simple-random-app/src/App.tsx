import { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [randomNumber, setRandomNumber] = useState(2);

  const generateRandomNumber = () => {
    // Tạo số ngẫu nhiên trong khoảng từ min đến max (bao gồm cả min và max)
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMin(value < max ? value : max - 1);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMax(value > min ? value : min + 1);
    }
  };

  return (
    <div className="random-app">
      <div className="result-container">
        <h1 className="random-number">{randomNumber}</h1>
      </div>

      <div className="input-container">
        <div className="input-field">
          <label>Min</label>
          <input
            type="number"
            min="1"
            max="99"
            value={min}
            onChange={handleMinChange}
          />
        </div>

        <div className="input-field">
          <label>Max</label>
          <input
            type="number"
            min="2"
            max="100"
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>

      <button className="generate-btn" onClick={generateRandomNumber}>
        GENERATE
      </button>
    </div>
  );
}

export default App;
