import React, { useCallback, useReducer, useEffect, useState } from "react";

import Button from "../../../shared/components/FormElements/Button";
import Input from "../../../shared/components/FormElements/Input";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import UsersList from "../UsersList";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import "./UserSearch.css";

const UserSearch = () => {
  // Need to add onClick functionality when user is clicked to take them to profile
  const [loadedUsers, setLoadedUsers] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE": {
        if (action.value.length > 0) {
          return {
            ...state,
            value: action.value,
            isValid: true,
          };
        } else {
          return {
            ...state,
            isValid: false,
          };
        }
      }
      case "SEARCHED": {
        return {
          ...state,
          isSearch: true,
        };
      }
      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(formReducer, {
    value: "",
    isValid: false,
    isSearched: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
    });
  }, []);

  const fetchUsers = async (username) => {
    if (username !== undefined) {
      console.log("username: ", username);
      try {
        const url = `https://api.github.com/search/users?q=${username}&1,5,default,desc`;

        const responseData = await fetch(url).then((res) => res.json());
        setLoadedUsers(responseData.items);
      } catch (err) {}
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [sendRequest]);

  const userSubmitHandler = async (event) => {
    event.preventDefault();

    fetchUsers(formState.value);

    dispatch({ type: "SEARCHED" });
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPosts;
  if (loadedUsers !== null) {
    currentPosts = loadedUsers.slice(indexOfFirstPost, indexOfLastPost);
  }

  return (
    <React.Fragment>
      <h1 className="search-text">Search Users</h1>

      <form onSubmit={userSubmitHandler} className="github-form">
        <Input
          id="search"
          element="input"
          type="text"
          errorText="Please enter a valid user name"
          onInput={inputHandler}
          className="github-form__input"
        />
        <Button type="submit" disabled={!formState.isValid} align="right">
          Search User
        </Button>
      </form>
      <div className="scollmenu">
        {loadedUsers !== null && (
          <h3 className="search-text">
            Number of accounts found: {loadedUsers.length}
          </h3>
        )}
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedUsers && <UsersList items={currentPosts} />}
      </div>
    </React.Fragment>
  );
};

export default UserSearch;
