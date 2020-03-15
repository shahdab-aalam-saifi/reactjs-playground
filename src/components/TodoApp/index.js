import React from "react";
import { ConnectedTodoList } from "./TodoList";
import { ConnectedTodoCreate } from "./TodoCreate";
import { ConnectedFilter } from "./Filter";

const TodoApp = () => {
  return (
    <div>
      <ConnectedFilter />
      <ConnectedTodoCreate />
      <ConnectedTodoList />
    </div>
  );
};

export default TodoApp;
