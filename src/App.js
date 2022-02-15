import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([
    { id: 0, name: "Max", age: "30" },
  ]);

  const addUserHandler = (enteredUser) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];

      updatedUsersList.unshift({
        id: enteredUser.id,
        name: enteredUser.name,
        age: enteredUser.age,
      });

      return updatedUsersList;
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
