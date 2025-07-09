import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");
  const [kelvin, setKelvin] = useState<string>("");

  const handleConvert = () => {
    if (celsius !== "") {
      // Chuyển từ Celsius sang Fahrenheit và Kelvin
      const celsiusValue = parseFloat(celsius);
      setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2));
      setKelvin((celsiusValue + 273.15).toFixed(2));
    } else if (fahrenheit !== "") {
      // Chuyển từ Fahrenheit sang Celsius và Kelvin
      const fahrenheitValue = parseFloat(fahrenheit);
      setCelsius((((fahrenheitValue - 32) * 5) / 9).toFixed(2));
      setKelvin((((fahrenheitValue - 32) * 5) / 9 + 273.15).toFixed(2));
    } else if (kelvin !== "") {
      // Chuyển từ Kelvin sang Celsius và Fahrenheit
      const kelvinValue = parseFloat(kelvin);
      setCelsius((kelvinValue - 273.15).toFixed(2));
      setFahrenheit((((kelvinValue - 273.15) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.target.value);
    setFahrenheit("");
    setKelvin("");
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFahrenheit(e.target.value);
    setCelsius("");
    setKelvin("");
  };

  const handleKelvinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKelvin(e.target.value);
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <div className="input-container">
        <TemperatureInput
          label="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <TemperatureInput
          label="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
        <TemperatureInput
          label="Kelvin"
          value={kelvin}
          onChange={handleKelvinChange}
        />
      </div>
      <button className="convert-button" onClick={handleConvert}>
        Chuyển đổi
      </button>
    </div>
  );
};

export default TemperatureConverter;
