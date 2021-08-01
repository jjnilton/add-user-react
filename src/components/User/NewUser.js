import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";

const NewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userRef = useRef();
  const ageRef = useRef();

  const errorElements = [];

  const isValidName = (name) => {
    if (
      name.match(/^[a-zA-Z]+([.|\s]+[a-zA-Z]+)*( +)?$/g) &&
      name.trim().length > 0
    ) {
      return true;
    }
  };

  const isValidAge = (age) => {
    if (age.match(/^[1-9]\d*$/g) && age.trim().length > 0) {
      return true;
    }
  };

  const inputChangeHandler = (event) => {
    const input = {
      username: setUserName,
      age: setUserAge,
    };
    input[event.target.name](event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const validationErrors = [];
    if (!isValidName(userName)) {
      validationErrors.push(
        `Invalid user. Expected string, got '${userName}' instead.`
      );
      errorElements.push(userRef.current);

    }
    if (!isValidAge(userAge)) {
      validationErrors.push(
        `Invalid age. Expected positive integer, got '${userAge}' instead.`
      );
      errorElements.push(ageRef.current);
    }

    if (validationErrors.length === 0) {
      props.addUserHandler({ username: userName, age: userAge });
      setUserName("");
      setUserAge("");
    } else {
      props.modalHandler(validationErrors);
      props.backToInputHandler(errorElements[0]);
    }
  };

  return (
    <Card>
      <div className={styles["new-user"]}>
        <form onSubmit={submitHandler} noValidate>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className={userName.length > 0 && !isValidName(userName) ? styles.invalid : ""}
              type="text"
              inputMode="text"
              name="username"
              placeholder="Your name"
              value={userName}
              onChange={inputChangeHandler}
              ref={userRef}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              className={userAge.length > 0 && !isValidAge(userAge) ? styles.invalid : ""}
              type="text"
              inputMode="numeric"
              name="age"
              placeholder="30"
              min="1"
              value={userAge}
              onChange={inputChangeHandler}
              ref={ageRef}
            ></input>
          </div>
          <Button name="Add User" type="submit"></Button>
        </form>
      </div>
    </Card>
  );
};

export default NewUser;
