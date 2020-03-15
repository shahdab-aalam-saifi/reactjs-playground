import { FILTER_SET, applySetFilter } from "../action/filter";

export const filterReducer = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case FILTER_SET: {
      return applySetFilter(state, action);
    }
    default:
      return state;
  }
};
