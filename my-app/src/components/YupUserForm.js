import React, { useState } from "react";
import { userSchema } from "../Validations/YupUserFormValidation";
import "./styles/YupUserForm.css";

function YupUserForm() {
  const [currentErrors, setCurrentErrors] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    userSchema
      .validate(formData)
      .then((responseData) => {
        // console.log("no validation errors");
        // console.log(responseData);
        setCurrentErrors([]);
      })
      .catch((err) => {
        // console.log(err);
        // console.log(err.name); // ValidationError
        // console.log(err.errors);
        setCurrentErrors(err.errors);
      });
  };

  return (
    <div className="reactForm">
      <h2>Create Account</h2>
      <p style={{ color: "red" }}>{currentErrors}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" placeholder="username" id="firstName"></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" placeholder="email"></input>
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input type="password" placeholder="password"></input>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default YupUserForm;
