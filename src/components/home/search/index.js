import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch, isDisabled }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome do usuário no GitHub"
        onKeyUp={handleSearch}
        disabled={isDisabled}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
