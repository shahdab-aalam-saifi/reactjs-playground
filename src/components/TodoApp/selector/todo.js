export const getTodosAsIds = state => state.todoState.ids;

export const getTodo = (state, todoId) => state.todoState.entities[todoId];
