// import "./App.css";

import Form from "./Components/Form/Form";
import Card from "./Components/UI/Card";
import UserPanel from "./Components/User/UserPanel";

function App() {
  const users = [
    { id: 1, name: "Lionel Messi", age: 34 },
    { id: 2, name: "Cristiano Ronaldo", age: 37 },
  ];

  let displayedData = <UserPanel userData={users}></UserPanel>;

  if (users.length <= 0) {
    displayedData = (
      <Card>
        <h1 style={{ textAlign: "center" }}>There is no data</h1>
      </Card>
    );
  }
  return (
    <div>
      <Form></Form>
      {displayedData}
    </div>
  );
}

export default App;
