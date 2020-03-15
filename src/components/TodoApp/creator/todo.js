import { TODO_ADD, TODO_TOGGLE } from "../action/todo";

export const doAddTodo = (id, name) => {
  return {
    type: TODO_ADD,
    todo: { id, name }
  };
};

export const doToggleTodo = id => {
  return {
    type: TODO_TOGGLE,
    todo: { id }
  };
};
