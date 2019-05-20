import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: 'walk the fish' }, { task: 'feed the bear' }] };
    this.create = this.create.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    })
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm createTodo={this.create}/>
      </div>
    );
  }
}

export default TodoList;
