import React, { useRef } from "react";

import Button from "../Button/Button";
import Card from "../UI/Card";

import classes from "./Form.module.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    const userData = {
      id: Math.round(Math.random() * 1000),
      name: enteredUserName,
      age: +enteredUserAge,
    };

    if (enteredUserName.trim() === "") return;

    props.addUser(userData);

    // rarely use refs to manipulate dom
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            ref={nameInputRef}
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
            ref={ageInputRef}
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
