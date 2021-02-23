import React from "react";
import PropTypes from "prop-types";
import Actions from "../actions";
import Repos from "../repos";
import Search from "../search";
import UserInfo from "../user-info";
import "./content.css";

const Content = ({ userInfo, repos, starred }) => {
  return (
    <div className="home">
      <Search />
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions />}

      {!!repos.length && (
        <Repos className="repos" title="Repositórios:" repos={repos} />
      )}

      {!!starred.length && (
        <Repos className="starred" title="Favoritos:" repos={starred} />
      )}
    </div>
  );
};

Content.propTypes = {
  userInfo: PropTypes.any.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
};

export default Content;
