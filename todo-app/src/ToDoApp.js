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
        const id = uuid.v4();
        setTodos([...todos, { id: id, task: newTodoText, completed: false }])
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
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} />
        </Paper>
    );
}

export default ToDoApp;