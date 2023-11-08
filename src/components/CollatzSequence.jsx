import React, { useState, useEffect } from "react";
import { CollatzList } from './CollatzList';
import "./collatzList.css";
// import { GetLeftmostDigit } from "./GetLeftmost";

export const CollatzSequence = () => {
  const [number, setNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [sequences, setSequences] = useState([]);

  const calculateCollatzSequence = (n) => {
    const collatz = [n];

    while (n > 1) {
      if (n % 2 === 0) {
        n /= 2;
      } else {
        n = n * 3 + 1;
      }
      collatz.push(n);
    }

    return collatz;
  };

  const handleCalculate = () => {
    const newNumbers = [...numbers];
    newNumbers.push(number);
    setNumbers(newNumbers);

    const newSequences = [...sequences];
    newSequences.push(calculateCollatzSequence(number));
    setSequences(newSequences);

    
    
    localStorage.setItem("collatzNumbers", JSON.stringify(newNumbers));
    localStorage.setItem("collatzSequences", JSON.stringify(newSequences));
  };

  useEffect(() => {
    
    const storedNumbers = JSON.parse(localStorage.getItem("collatzNumbers"));
    const storedSequences = JSON.parse(localStorage.getItem("collatzSequences"));

    if (storedNumbers && storedSequences) {
      setNumbers(storedNumbers);
      setSequences(storedSequences);
    }
  }, []);

  return (
    <div>
      <h2>Conjetura de Collatz</h2>
      <label>
        Número inicial:{" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button onClick={handleCalculate}>Calcular</button>
      <CollatzList numbers={numbers} sequences={sequences} />
     
    </div>
  );
};
