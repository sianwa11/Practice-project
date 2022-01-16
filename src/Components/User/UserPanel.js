import React from "react";

import Card from "../UI/Card";
import SVG from "../UI/SVG";
import "./UserPanel.css";

const UserPanel = (props) => {
  const removeUserHandler = (index) => {
    props.removeUser(index);
  };
  return (
    <Card>
      <ul className="user__list">
        {props.userData.map((data, index) => (
          <li className="user__list--item" key={index}>
            <p className="user__list--name">{data.name}</p>
            <p className="user__list--name">Age: {data.age}</p>
            <SVG
              class={"user__list--icon"}
              selectUserKey={removeUserHandler}
              userKey={index}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserPanel;
