
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      // Evalúa la operación matemática
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora</h2>

      <input style={styles.display} type="text" value={input} readOnly />

      <div style={styles.buttons}>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("")}></button>

        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "250px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  display: {
    width: "100%",
    height: "40px",
    fontSize: "20px",
    marginBottom: "10px",
    textAlign: "right",
    padding: "5px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
};

export default App;