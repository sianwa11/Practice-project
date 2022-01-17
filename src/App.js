// import "./App.css";

import React, { useState } from "react";
import Form from "./Components/Form/Form";
import Card from "./Components/UI/Card";
import Modal from "./Components/UI/Modal";
import UserPanel from "./Components/User/UserPanel";

function App() {
  const users = [
    { id: 1, name: "Lionel Messi", age: 34 },
    { id: 2, name: "Cristiano Ronaldo", age: 37 },
  ];
  const [allUsers, setUsers] = useState(users);
  const [showModal, setState] = useState(false);

  const removeUserHandler = (index) => {
    const alteredUsers = allUsers.filter((user, i) => i !== index);
    setUsers(alteredUsers);
  };

  let message = "";
  let displayedData = (
    <UserPanel userData={allUsers} removeUser={removeUserHandler}></UserPanel>
  );
  let displayModal = <></>;

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      if (user.age <= 0) {
        setState(true);
        return [...prevUsers];
      }
      return [user, ...prevUsers];
    });
  };

  const modalStateHandler = (bool) => {
    setState(bool);
  };

  if (allUsers.length <= 0) {
    displayedData = (
      <Card>
        <h1 style={{ textAlign: "center" }}>There is no data</h1>
      </Card>
    );
  }

  if (showModal) {
    message = "Age cannot be 0";
    displayModal = (
      <Modal changeModalState={modalStateHandler} errMsg={message}></Modal>
    );
  }

  return (
    <div>
      {displayModal}
      <Form addUser={addUserHandler}></Form>
      {displayedData}
    </div>
  );
}

export default App;
