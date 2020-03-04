import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit">{children}</button>
  </form>
);

Search.defaultProps = {
  value: "",
  onChange: () => {},
  children: "Submit"
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Search;
