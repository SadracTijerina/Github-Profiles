import React, { useCallback, useReducer } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./UserItem.css";

const UserItem = (props) => {
  // todo: FIGURE OUT HOW TO ADD THE USER TO HISTORY

  //     const[historyState, dispatch] = useReducer(historyReducer, {inputs: {

  //     }})

  //   const historyHandler = useCallback(
  //     (title, repoCount, followerCount, description) => {
  //       dispatch({
  //         type: "ADD_HISTORY",
  //         title: title,
  //         repoCount: repoCount,
  //         followerCount: followerCount,
  //         description: description,
  //       });
  //     }
  //   );

  const historyHandler = (e) => {
    console.log(e);
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
        {!props.history && (
          <div className="user-item__actions">
            <Button inverse onClick={historyHandler}>
              Add to History
            </Button>
          </div>
        )}
      </Card>
    </li>
  );
};

export default UserItem;
