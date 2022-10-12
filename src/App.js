import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers((prevState) => {
      return [userData, ...prevState];
    });
  }
  
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users}/>
    </>
  );
}

export default App;
