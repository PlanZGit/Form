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
      Yup Form <br />
      <p style={{ color: "red" }}>{currentErrors}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default YupUserForm;
