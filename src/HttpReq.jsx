import { useReducer, useEffect } from "react";
const initialState = {
  isLoading: true,
  data: [],
  error: "",
};
const reducer = (state, action) => {};

function HttpReq() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error.message));
  }, []);
  return <div>HttpReq</div>;
}

export default HttpReq;
