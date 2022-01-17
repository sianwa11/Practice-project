import React, { useState } from "react";

import Button from "../Button/Button";
import Card from "../UI/Card";

import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  // const [validationStatus, setValidationStatus] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const userData = {
      id: Math.round(Math.random() * 1000),
      name: enteredName,
      age: +enteredAge,
    };

    if (userData.name.trim() === "") return;

    props.addUser(userData);

    setName("");
    setAge("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.form__group}>
          <label for="name" className={classes.form__label}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={classes.form__input}
            placeholder="Full Name..."
            required
            value={enteredName}
            onChange={nameHandler}
          />
        </div>
        <div className={classes.form__group}>
          <label for="age" className={classes.form__label}>
            age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className={classes.form__input}
            placeholder="Age..."
            required
            value={enteredAge}
            onChange={ageHandler}
          />
        </div>
        <div className={classes.form__group}>
          <Button name="Add User" />
        </div>
      </form>
    </Card>
  );
};

export default Form;
