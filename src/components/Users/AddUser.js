import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  //const [userName, setUserName] = useState("");
  //const [age, setAge] = useState("");
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  // const usernameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredUserAge = userAgeInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setErrorMessage("Please enter username or age");
      return;
    }

    if (+enteredUserAge < 1) {
      setErrorMessage("Age should be greater than 0");
      return;
    }

    const user = {
      id: `id-${Math.random().toString(16).slice(2)}`,
      userName: enteredUserName,
      age: enteredUserAge,
    };

    props.onAddUser(user);

    // setUserName("");
    // setAge("");
    userNameInputRef.current.value = "";
    userAgeInputRef.current.value = "";
  };

  const errorHandler = () => {
    setErrorMessage(null);
  };

  return (
    <div>
      {errorMessage && (
        <ErrorModal
          title="Error Message"
          message={errorMessage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={userNameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
