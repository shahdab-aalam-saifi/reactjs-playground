import React from "react";
import { ConnectedTodoItem } from "../TodoItem";
import { connect } from "react-redux";
import { getTodosAsIds } from "../selector/todo";

const TodoList = ({ todosAsIds }) => {
  return (
    <div>
      {todosAsIds.map(todoId => (
        <ConnectedTodoItem key={todoId} todoId={todoId} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todosAsIds: getTodosAsIds(state),
  };
};

export const ConnectedTodoList = connect(mapStateToProps)(TodoList);
export default TodoList;
