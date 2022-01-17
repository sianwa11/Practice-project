import React from "react";

import Card from "../UI/Card";
import SVG from "../UI/SVG";
import classes from "./UserPanel.module.css";

const UserPanel = (props) => {
  const removeUserHandler = (index) => {
    props.removeUser(index);
  };
  return (
    <Card>
      <ul className={classes.user__list}>
        {props.userData.map((data, index) => (
          <li className={classes["user__list--item"]} key={index} id={data.id}>
            <p className={classes["user__list--name"]}>{data.name}</p>
            <p className={classes["user__list--name"]}>Age: {data.age}</p>
            <SVG
              class={classes["user__list--icon"]}
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
