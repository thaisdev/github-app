import React from "react";
import PropTypes from "prop-types";

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array,
};

Repos.defaultProps = {
  className: "",
  repos: [],
};

export default Repos;
