import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userInfo }) => {
  const { username, login, photo, repos, followers, following } = userInfo;
  return (
    <div className="user-info">
      <img src={photo} alt="Foto do usuário" />
      <h2 className="username">
        <a href={`https://github.com/${login}`}>{username}</a>
      </h2>
      <ul className="repos-info">
        <li>{`Repositórios: ${repos}`}</li>
        <li>{`Seguidores: ${followers}`}</li>
        <li>{`Seguindo: ${following}`}</li>
      </ul>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
