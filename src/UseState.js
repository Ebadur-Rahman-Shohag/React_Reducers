import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function dec() {
    return setCount((prevCount) => prevCount - step);
  }
  function inc() {
    return setCount((prevCount) => prevCount + step);
  }

  function defineCount(e) {
    setCount(Number(e.target.value));
  }

  function defineStep(e) {
    // console.log(e);
    setStep(Number(e.target.value));
  }

  function resetHandler() {
    setStep(0);
    setCount(0);
  }
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <div>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default UseState;
