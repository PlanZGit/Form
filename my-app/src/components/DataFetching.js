import React, { useReducer, useEffect, useState } from "react";
// import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        user: {},
        error: "Something went wrong!",
      };

    default:
      return state;
  }
};

function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchData, setFetchData] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${fetchData}`)
      .then((response) => response.json())
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", error: err });
      })
      .then((json) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });
      });
  }, [fetchData]);

  return (
    <div>
      <div> DataFetching </div>
      <button
        onClick={() => setFetchData((prevfetchData) => prevfetchData + 1)}
      >
        fetch data
      </button>
      {state.loading ? "Loading" : state.user.username}
      {state.err}
    </div>
  );
}

export default DataFetching;
