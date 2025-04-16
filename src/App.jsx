import { useReducer } from "react";
import HttpReq from "./HttpReq";

const initialState = { count: 0, number: 1 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 };
    case "IncreaseByAmount":
      return { ...state, count: state.count + action.payload };
    case "Reset":
      return { ...state, count: 0 };
    case "Decrease":
      return { ...state, count: state.count - 1 };
    case "Up":
      return { ...state, number: state.number + 1 };

    default:
      throw new Error("invalid action");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increaseHandler = () => {
    dispatch({ type: "Increase" });
  };
  const increaseByAmountHandler = () => {
    dispatch({ type: "IncreaseByAmount", payload: 10 });
  };
  const resetHandler = () => {
    dispatch({ type: "Reset" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "Decrease" });
  };
  return (
    <div>
      {/* <h1>useReducer Hook</h1>
      <p>{state.count}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaseByAmountHandler}>Increase By Amount</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <hr />
      <p>{state.number}</p>
      <button
        onClick={() => {
          dispatch({ type: "Up" });
        }}
      >
        up
      </button> */}
      <HttpReq />
    </div>
  );
}

export default App;
