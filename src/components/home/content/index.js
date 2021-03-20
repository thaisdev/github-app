import React from "react";
import PropTypes from "prop-types";
import Actions from "../actions";
import Repos from "../repos";
import Search from "../search";
import UserInfo from "../user-info";
import "./content.css";

const Content = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
}) => {
  return (
    <div className="home">
      <Search handleSearch={handleSearch} isDisabled={isFetching} />
      {isFetching ? (
        <div>Carregando...</div>
      ) : (
        <>
          {!!userInfo && <UserInfo userInfo={userInfo} />}
          {!!userInfo && (
            <Actions getRepos={getRepos} getStarred={getStarred} />
          )}

          {!!repos.length && (
            <Repos className="repos" title="Repositórios:" repos={repos} />
          )}

          {!!starred.length && (
            <Repos className="starred" title="Favoritos:" repos={starred} />
          )}
        </>
      )}
    </div>
  );
};

Content.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
};

export default Content;
