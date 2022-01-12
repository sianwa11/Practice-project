import React from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";

import "./Form.css";

const Form = (props) => {
  return (
    <Card>
      <form className="form">
        <div className="form__group">
          <label for="name" className="form__label">
            Full name
          </label>
          <input
            id="name"
            type="text"
            className="form__input"
            placeholder="Full Name..."
            required
          />
        </div>
        <div className="form__group">
          <label for="age" className="form__label">
            age
          </label>
          <input
            id="age"
            type="number"
            className="form__input"
            placeholder="Age..."
            required
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
