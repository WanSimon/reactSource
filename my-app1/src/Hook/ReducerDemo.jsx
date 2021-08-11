import React, { useReducer } from "react";

export default function ReducerDemo() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      reducer {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 20 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
