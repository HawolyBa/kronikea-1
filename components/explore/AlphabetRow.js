import React from "react";

const AlphabetRow = ({ alphabet, currentLetter, setCurrentLetter }) => {
  return (
    <div className="alphabetic-search">
      {alphabet.map((a) => (
        <span
          className={currentLetter === a ? "current" : ""}
          key={a}
          onClick={() => setCurrentLetter(a)}
        >
          {a}
        </span>
      ))}
    </div>
  );
};

export default AlphabetRow;
