import { FILTER_SET } from "../action/filter";

export const doSetFilter = filter => {
  return {
    type: FILTER_SET,
    filter
  };
};
