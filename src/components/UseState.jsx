import React, { useState } from "react";

const UseState = () => {
  const [showText, setShowText] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  function handleToggle() {
    setShowText(!showText);
  }
  function handleStyle() {
    setChangeColor(!changeColor);
  }
  return (
    <>
      {showText ? (
        <div style={{ color: changeColor ? "red" : "green" }}>
          Hi Hello! Welcome to UseState
        </div>
      ) : (
        <h3 style={{ color: changeColor ? "red" : "green" }}>Not Found</h3>
      )}
      <button onClick={handleToggle}>Toggle </button>
      <button onClick={handleStyle}>ChangeColor </button>
    </>
  );
};

export default UseState;
