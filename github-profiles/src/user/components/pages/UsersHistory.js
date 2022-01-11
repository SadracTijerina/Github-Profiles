import React from "react";

import UsersList from "../UsersList";

import "./UserHistory.css";

const UsersHistory = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
      title: "Sadrac Tijerina",
      description: "Hoping to land a job with this amazing company!",
      repoCount: 33,
      followerCount: 44,
    },
  ];

  // Need to add onClick functionality when user is clicked to take them to profile

  return (
    <div>
      <h1 className="history-text">Search History</h1>
      <h3 className="history-text">
        Number of accounts searched: {USERS.length}
      </h3>
      <UsersList items={USERS} history={true} />
    </div>
  );
};

export default UsersHistory;
