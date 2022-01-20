import React, { useState, useEffect } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./UserItem.css";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [repoCount, setRepoCount] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [description, setDescription] = useState(null);
  const [pages] = useState(Math.round(props.users / 5));

  const goToNextPage = () => {};

  const goToPrevPage = () => {};

  const changePage = () => {};

  const getPaginatedData = () => {};

  const getPaginationGroup = () => {};

  const fetchRepos = async () => {
    try {
      const url = `https://api.github.com/users/${props.title}`;
      const responseData = await fetch(url).then((res) => res.json());

      setRepoCount(responseData.public_repos);
      setFollowers(responseData.followers);
      setDescription(responseData.bio);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="user-item__info">
          <h2>{props.title}</h2>
          <h3>Repos: {repoCount}</h3>
          <h3>Followers: {followers}</h3>
          <p>{description}</p>
        </div>
        <div className="user-item__actions">
          <Button href={props.link}>Go to profile</Button>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
