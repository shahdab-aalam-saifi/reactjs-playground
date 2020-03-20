import React from "react";
import { doSetFilter } from "../creator/filter";
import { connect } from "react-redux";

const Filter = ({ onSetFilter }) => {
  return (
    <div>
      Show
      <button type="button" onClick={() => onSetFilter("SHOW_ALL")}>
        All
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_COMPLETED")}>
        Completed
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_INCOMPLETED")}>
        Incompleted
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: filterType => dispatch(doSetFilter(filterType))
  };
};

export const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);
