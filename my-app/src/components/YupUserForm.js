import React from "react";
import { userSchema } from "../Validations/YupUserFormValidation";

function YupUserForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    console.log(formData);

    const isValid = await userSchema.isValid(formData);

    console.log(isValid);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default YupUserForm;
