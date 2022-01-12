import React, { useCallback, useReducer } from "react";

import Button from "../../../shared/components/FormElements/Button";
import Input from "../../../shared/components/FormElements/Input";
import UsersList from "../UsersList";

import "./UserSearch.css";

import { VALIDATOR_REQUIRE } from "../../../shared/components/utils/validators";

const UserSearch = () => {
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
    {
      id: "u1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
      title: "Sadrac Tijerina",
      description: "Hoping to land a job with this amazing company!",
      repoCount: 33,
      followerCount: 44,
    },
    {
      id: "u1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
      title: "Sadrac Tijerina",
      description: "Hoping to land a job with this amazing company!",
      repoCount: 33,
      followerCount: 44,
    },
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

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE": {
        if (action.value.length > 0) {
          return {
            ...state,
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

  const placeSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "SEARCHED" });
  };

  return (
    <React.Fragment>
      <h1 className="search-text">Search Users</h1>

      <form onSubmit={placeSubmitHandler} className="github-form">
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
        {formState.isSearch && (
          <h3 className="search-text">
            Number of accounts found: {USERS.length}
          </h3>
        )}
        <UsersList items={USERS} history={false} />
      </div>
    </React.Fragment>
  );
};

export default UserSearch;
