import React from "react";

const UserInfo = ({ userInfo }) => {
  const { username, repos, followers, following } = userInfo;
  return (
    <div className="user-info">
      <img src="https://avatars.githubusercontent.com/u/41842156?v=4" />
      <h2 className="username">
        <a href="https://github.com/thaisdev">{username}</a>
      </h2>
      <ul className="repos-info">
        <li>{`Repositórios: ${repos}`}</li>
        <li>{`Seguidores: ${followers}`}</li>
        <li>{`Seguindo: ${following}`}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
