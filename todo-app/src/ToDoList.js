import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const ToDoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                task={todo.task}
                                key={todo.id}
                                id={todo.id}
                                completed={todo.completed}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo} />
                            {!(todos.length - 1 === i) && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;
}

export default ToDoList;
