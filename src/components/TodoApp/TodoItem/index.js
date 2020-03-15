import React from "react";
import { connect } from "react-redux";
import { doToggleTodo } from "../creator/todo";
import { getTodo } from "../selector/todo";

const TodoItem = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    todo: getTodo(state, props.todoId),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => dispatch(doToggleTodo(id))
  };
};

export const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem);
export default TodoItem;
