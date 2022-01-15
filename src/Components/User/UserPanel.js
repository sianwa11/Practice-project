import React from "react";

import Card from "../UI/Card";
import SVG from "../UI/SVG";
import "./UserPanel.css";

const UserPanel = (props) => {
  return (
    <Card>
      <ul className="user__list">
        {props.userData.map((data) => (
          <li className="user__list--item">
            <p className="user__list--name">{data.name}</p>
            <p className="user__list--name">Age: {data.age}</p>
            <SVG class={"user__list--icon"} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserPanel;
