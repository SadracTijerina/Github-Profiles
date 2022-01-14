import React, { useEffect, useState } from "react";

import UsersList from "../UsersList";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

import "./UserHistory.css";

const UsersHistory = () => {
  // Need to add onClick functionality when user is clicked to take them to profile

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/history`
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.historyUsers);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <h1 className="history-text">Search History</h1>
      {!isLoading && loadedUsers && (
        <h3 className="history-text">
          Number of accounts searched: {loadedUsers.length}
        </h3>
      )}
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && (
        <UsersList items={loadedUsers} history={true} />
      )}
    </div>
  );
};

export default UsersHistory;
