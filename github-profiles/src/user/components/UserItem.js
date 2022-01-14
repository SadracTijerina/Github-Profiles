import React, { useEffect } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./UserItem.css";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const historyHandler = async (e) => {
    console.log(e);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/history`,
        "POST",
        JSON.stringify({
          title: props.title,
          repoCount: 33,
          followerCount: 4,
          history: "test",
          id: props.id,
          image: props.image,
        }),
        { "Content-type": "application/json" }
      );
    } catch (err) {}
  };

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="user-item__info">
          <h2>{props.title}</h2>
          <h3>Repos: {props.repoCount}</h3>
          <h3>Followers: {props.followerCount}</h3>
          <p>{props.description}</p>
        </div>
        <div className="user-item__actions">
          <Button href={props.link}>Go to profile</Button>
          {!props.history && (
            <Button inverse onClick={historyHandler}>
              Add to History
            </Button>
          )}
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
