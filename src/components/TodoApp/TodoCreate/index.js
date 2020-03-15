import React, { Component } from "react";
import { doAddTodo } from "../creator/todo";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

class TodoCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onCreateTodo = this.onCreateTodo.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangeName(event) {
    this.setState({ value: event.target.value });
  }

  onCreateTodo(event) {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCreateTodo}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={this.state.value}
            onChange={this.onChangeName}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: name => dispatch(doAddTodo(uuid(), name))
  };
}

export const ConnectedTodoCreate = connect(
  null,
  mapDispatchToProps
)(TodoCreate);

export default TodoCreate;
