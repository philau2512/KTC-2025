import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const performCalculation = (op: string, secondOperand: number) => {
    if (firstOperand === null) {
      return secondOperand;
    }

    switch (op) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "×":
        return firstOperand * secondOperand;
      case "÷":
        return firstOperand / secondOperand;
      case "%":
        return firstOperand % secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, inputValue);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const handleEqual = () => {
    if (!operator || firstOperand === null) return;

    const inputValue = parseFloat(display);
    const result = performCalculation(operator, inputValue);

    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button" onClick={clearDisplay}>
          AC
        </button>
        <button
          className="button"
          onClick={() => {
            /* Chức năng không sử dụng */
          }}
        >
          +/-
        </button>
        <button className="button" onClick={() => handleOperator("%")}>
          %
        </button>
        <button className="button operator" onClick={() => handleOperator("÷")}>
          ÷
        </button>

        <button className="button" onClick={() => inputDigit("7")}>
          7
        </button>
        <button className="button" onClick={() => inputDigit("8")}>
          8
        </button>
        <button className="button" onClick={() => inputDigit("9")}>
          9
        </button>
        <button className="button operator" onClick={() => handleOperator("×")}>
          ×
        </button>

        <button className="button" onClick={() => inputDigit("4")}>
          4
        </button>
        <button className="button" onClick={() => inputDigit("5")}>
          5
        </button>
        <button className="button" onClick={() => inputDigit("6")}>
          6
        </button>
        <button className="button operator" onClick={() => handleOperator("-")}>
          −
        </button>

        <button className="button" onClick={() => inputDigit("1")}>
          1
        </button>
        <button className="button" onClick={() => inputDigit("2")}>
          2
        </button>
        <button className="button" onClick={() => inputDigit("3")}>
          3
        </button>
        <button className="button operator" onClick={() => handleOperator("+")}>
          +
        </button>

        <button className="button zero" onClick={() => inputDigit("0")}>
          0
        </button>
        <button className="button" onClick={inputDecimal}>
          .
        </button>
        <button className="button operator" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
