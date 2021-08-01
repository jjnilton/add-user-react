import styles from "./App.module.css";
import UserList from "./components/User/UserList";
import Modal from "./components/UI/Modal";
import NewUser from "./components/User/NewUser";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      username: "root",
      age: 0,
    },
  ]);
  const [modal, setModal] = useState({
    active: false,
    message: ["Default message"],
  });
  const [lastInput, setLastInput] = useState();

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers,
        { id: prevUsers[prevUsers.length-1].id + 1, username: user.username, age: user.age }
      ];
    });
  };

  const modalHandler = (message) => {
    setModal({
      status: true,
      message: message ? message : modal.message,
    });
  };

  const modalHider = () => {
    setModal({
      status: false,
      message: modal.message,
    });
    lastInput.focus();
  };

  const backToInputHandler = (inputElement) => {
    setLastInput(inputElement);
  };

  return (
    <>
      <div className={`${styles.app} ${modal.status && styles.overlay}`}>
        <NewUser
          addUserHandler={addUserHandler}
          modalHandler={modalHandler}
          backToInputHandler={backToInputHandler}
        ></NewUser>
        <UserList data={users}></UserList>
      </div>
      {modal.status && (
        <Modal modalHider={modalHider} message={modal.message}></Modal>
      )}
    </>
  );
}

export default App;
