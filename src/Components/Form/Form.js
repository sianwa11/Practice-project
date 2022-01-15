import React, { useState } from "react";

import Button from "../Button/Button";
import Card from "../UI/Card";

import "./Form.css";

const Form = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");

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
      age: enteredAge,
    };

    console.log(userData);
  };

  return (
    <Card>
      <form className="form" onSubmit={formHandler}>
        <div className="form__group">
          <label for="name" className="form__label">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input"
            placeholder="Full Name..."
            required
            value={enteredName}
            onChange={nameHandler}
          />
        </div>
        <div className="form__group">
          <label for="age" className="form__label">
            age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="form__input"
            placeholder="Age..."
            required
            value={enteredAge}
            onChange={ageHandler}
          />
        </div>
        <div className="form__group">
          <Button />
        </div>
      </form>
    </Card>
  );
};

export default Form;
