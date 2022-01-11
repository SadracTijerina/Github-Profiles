import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="user-list center">
        <Card>
          <h2>No user found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          title={user.title}
          description={user.description}
          repoCount={user.repoCount}
          followerCount={user.followerCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
