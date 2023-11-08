import React, { useState, useEffect } from "react";
import "./pianoNotes.css";
import { transformNote } from './noteTransform'; 
import { playFrequency } from "./AudioUtils";

export const NotasTipo = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch("notas.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const updatedData = { NotasPiano: {} };
  
        Array.from({ length: 7 }).forEach((_, octave) => {
          Object.entries(jsonData.NotasPiano).forEach(([note, originalNotes]) => {
            const updatedNotes = Object.fromEntries(
              Object.entries(originalNotes).map(([noteName, originalNote]) => [
                `${noteName}${octave}`,
                transformNote(originalNote, octave),
              ])
            );
  
            updatedData.NotasPiano[`${note}${octave}`] = updatedNotes;
          });
        });
  
        setData(updatedData);
        console.log(updatedData);
      });
  }, []);
  
  
  return (
    <div className="piano">
      {data &&
        Object.keys(data.NotasPiano).map((note, index) => (
          <div key={index} className="piano-octave">
            {Object.keys(data.NotasPiano[note]).map((key, keyIndex) => (
              <div
                key={keyIndex}
                className={`piano-key ${key.length > 4 ? "long-name" : ""} ${
                  key.includes("♯") || key.includes("♭") ? "black" : ""
                }`}
                onClick={() =>
                  playFrequency(data.NotasPiano[note][key].frecuencia)
                }
              ></div>
            ))}
          </div>
        ))}
    </div>
  );
};
