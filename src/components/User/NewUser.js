import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const NewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const isValidName = (name) => {
    if (
      name.match(/^[a-zA-Z]+([.|\s]+[a-zA-Z]+)*( +)?$/g) &&
      name.trim().length > 0
    ) {
      return true;
    }
  };

  const isValidAge = (age) => {
    if (age.match(/^\d+/g) && age.trim().length > 0) {
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
    console.log("userInfo:", userName, userAge);

    const validationErrors = [];
    if (!isValidName(userName)) {
      validationErrors.push(
        `Invalid user. Expected string, got '${userName}' instead.`
      );
    }
    if (!isValidAge(userAge)) {
      validationErrors.push(
        `Invalid age. Expected positive integer, got '${userAge}' instead.`
      );
    }

    if (validationErrors.length === 0) {
      props.addUserHandler({ username: userName, age: userAge });
      setUserName("");
      setUserAge("");
    } else {
      props.modalHandler(validationErrors);
    }
  };

  return (
    <Card>
      <div className={styles["new-user"]}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Username</label>
            <input
              className={userName.length > 0 && !isValidName(userName) && styles.invalid}
              type="text"
              name="username"
              value={userName}
              onChange={inputChangeHandler}
            ></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              className={userAge.length > 0 && !isValidAge(userAge) && styles.invalid}
              type="number"
              name="age"
              value={userAge}
              onChange={inputChangeHandler}
            ></input>
          </div>
          {/* <button type="submit">Add User</button> */}
          <Button name="Add User"></Button>
        </form>
      </div>
    </Card>
  );
};

export default NewUser;
