import React, { useReducer } from "react";

function UseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };

      case "reset":
        return initialState;
      default:
        throw new Error("Error....");
    }
  }
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const {count,step} = state

  function dec() {
    dispatch({ type: "dec" });
  }
  function inc() {
    dispatch({ type: "inc" });
  }

  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function defineStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function resetHandler() {
    dispatch({ type: "reset" });
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

export default UseReducer;
