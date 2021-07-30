import "./App.css";
import UserList from "./components/User/UserList";
import Modal from "./components/UI/Modal";
import NewUser from "./components/User/NewUser";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      username: "root",
      age: 0,
    },
  ]);
  const [modal, setModal] = useState({
    active: false,
    message: ["Default message"],
  });

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
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
  };
  return (
    <div>
      <div className={`app ${modal.status && "overlay"}`}>
        {/* <button onClick={() => modalHandler()}>Show Modal</button>
        <button onClick={modalHider} disabled={!modal.status}>Hide Modal</button> */}
        <NewUser
          addUserHandler={addUserHandler}
          modalHandler={modalHandler}
        ></NewUser>
        <UserList data={users}></UserList>
      </div>
      {modal.status && (
        <Modal modalHider={modalHider} message={modal.message}></Modal>
      )}
    </div>
  );
}

export default App;
