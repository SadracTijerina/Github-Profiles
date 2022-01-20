import React, { useState } from "react";

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

  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.avatar_url}
          title={user.login}
          link={user.html_url}
          //description={user.html_url}
          //repoCount={}
          //followerCount={user.followerCount.length}
          // history={props.history}
        />
      ))}
    </ul>
  );
};

export default UsersList;
