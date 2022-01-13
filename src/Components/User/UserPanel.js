import React from "react";

import Card from "../UI/Card";
import "./UserPanel.css";

const UserPanel = () => {
  return (
    <Card>
      <ul className="user__list">
        <li className="user__list--item">
          <h4 className="user__list--name">Messi</h4>
          <i className="user__list--icon">del</i>
        </li>
        <li className="user__list--item">
          <h4 className="user__list--name">Messi</h4>
          <i className="user__list--icon">del</i>
        </li>
        <li className="user__list--item">
          <h4 className="user__list--name">Messi</h4>
          <i className="user__list--icon">del</i>
        </li>
        <li className="user__list--item">
          <h4 className="user__list--name">Messi</h4>
          <i className="user__list--icon">del</i>
        </li>
        <li className="user__list--item">
          <h4 className="user__list--name">Messi</h4>
          <i className="user__list--icon">del</i>
        </li>
      </ul>
    </Card>
  );
};

export default UserPanel;
