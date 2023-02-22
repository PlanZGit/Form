# Yup

Visit https://github.com/jquense/yupb

### installation

    npm install yup
    import * as yup from "yup";

Create YupUserFormValidation.js

    export const userSchema = yup.object().shape({
      name: yup.string().min(4).max(20).required("Enter a username"),
      email: yup.string().email().required(),
      password: yup.string().min(4).max(10).required(),
    });

create custom test

    name: yup.string()
    .test(
      "white-space",
      "name contains white space",
      (value) => value.indexOf(" ") < 0
    )
