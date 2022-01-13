import React, { useEffect } from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0 && !props.history) {
    return (
      <div className="user-list center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  if (props.items.length === 0 && props.history) {
    return (
      <div className="user-list center">
        <Card>
          <h2>No history users yet.</h2>
        </Card>
      </div>
    );
  }

  const getBio = async (login) => {
    if (login.size < 1 || login.size === null) {
      return;
    }

    try {
      const url = `https://api.github.com/users/${login}`;

      const responseData = await fetch(url).then((res) => res.json());

      console.log("Getting data", responseData);
    } catch (err) {}
  };

  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.avatar_url}
          title={user.login}
          // description={getBio("SadracTijerina")}
          // repoCount={user.repoCount.length}
          // followerCount={user.followerCount.length}
          // history={props.history}
        />
      ))}
    </ul>
  );
};

export default UsersList;
