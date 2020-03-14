export const TODO_ADD = "TODO_ADD";
export const TODO_TOGGLE = "TODO_TOGGLE";

export const applyAddTodo = (state, action) => {
  const todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(todo);
};

export const applyToggleTodo = (state, action) => {
  return state.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
};