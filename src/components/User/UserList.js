import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserEntry = (props) => {
  return <li>{`${props.username} (${props.age} years old)`}</li>;
};

const UserList = (props) => {
  const userElements = props.data.map((item) => {
    return <UserEntry username={item.username} age={item.age} key={item.id}></UserEntry>;
  });

  return (
    <Card>
      <div className={styles["user-list"]}>
        <ul>{userElements}</ul>
      </div>
    </Card>
  );
};

export default UserList;
