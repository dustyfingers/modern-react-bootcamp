import React, { useState } from 'react';
import uuid from 'uuid';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function ToDoApp() {
    const initialTodos = [
        { id: 1, task: 'Bathe dogs', completed: false },
        { id: 2, task: 'Powerwash driveway', completed: true },
        { id: 3, task: 'Create a react portfolio', completed: true }
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid.v4(), task: newTodoText, completed: false }])
    };

    const removeTodo = todoId => {
        // filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        // call setTodos with new todos array
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        // toggle the 'completed' property on the todo where the id matches the passed in id, otherwise just return the todo as is
        const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    };

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }} >
                <Toolbar>
                    <Typography color='inherit'>TODOS - WITH HOOKS!</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }} >
                <Grid item xs={11} md={8} lg={6}>
                    <ToDoForm addTodo={addTodo} />
                    <ToDoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ToDoApp;