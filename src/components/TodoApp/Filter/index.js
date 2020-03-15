import React from "react";
import { doSetFilter } from "../creator/filter";
import { connect } from "react-redux";

function Filter({ onSetFilter }) {
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
}

function mapDispatchToPropsFilter(dispatch) {
  return {
    onSetFilter: filterType => dispatch(doSetFilter(filterType))
  };
}

export const ConnectedFilter = connect(null, mapDispatchToPropsFilter)(Filter);
