import {
  TODO_ADD,
  TODO_TOGGLE,
  applyAddTodo,
  applyToggleTodo
} from "../action/todo";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return applyAddTodo(state, action);

    case TODO_TOGGLE:
      return applyToggleTodo(state, action);

    default:
      return state;
  }
};
