import { useReducer, useEffect } from "react";
const initialState = {
  isLoading: true,
  data: [],
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { isLoading: false, data: action.payload, error: "" };
    case "FAILED":
      return { isLoading: false, data: [], error: action.payload };
    default:
      throw new Error("Invalid Action");
  }
};

function HttpReq() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "SUCCESS", payload: json }))
      .catch((error) => dispatch({ type: "FAILED", payload: error.message }));
  }, []);
  return (
    <div>
      {state.isLoading && <p>Loading...</p>}
      <div>
        {" "}
        <ul>
          {state.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      {!!state.error && <p>{state.error}</p>}
    </div>
  );
}

export default HttpReq;
